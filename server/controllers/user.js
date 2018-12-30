let UserProxy = require('../proxy').User
let Decorator = require('../common/decorator').responseDecorator
let validator = require('validator')
let validateId = require('../common/tools').validateId
let bcrypt = require('bcryptjs')

exports.signup = async function (ctx, next) {
  let {
    loginname,
    email,
    pass,
    rePass
  } = JSON.parse(ctx.request.body)

  let checkedFileds = [loginname, pass, rePass, email].some((item) => {
    return item === undefined || item === ''
  })
  if (checkedFileds) {
    console.log('ss')
    ctx.body = Decorator({
      message: '字段不全',
      err: 'Prop Invalid'
    })
    return
  }

  if (!validateId(loginname)) {
    ctx.body = Decorator({
      message: '用户名不合法',
      err: 'Prop Invalid'
    })
    return
  }

  if (pass.length < 6) {
    ctx.body = Decorator({
      message: '密码长度需 >= 6！',
      err: 'Prop Invalid'
    })
    return
  }

  if (pass !== rePass) {
    ctx.body = Decorator({
      message: '两次密码输入不一致',
      err: 'Prop Invalid'
    })
    return
  }

  if (!validator.isEmail(email)) {
    ctx.body = Decorator({
      message: '邮箱不合法',
      err: 'Prop Invalid'
    })
    return
  }

  await UserProxy.getUsersByQuery({
    '$or': [{
        'loginname': loginname
      },
      {
        'email': email
      }
    ]
  }, {}).then(async (users) => {
    if (users.length > 0) {
      // 用户名或邮箱已被占用
      ctx.body = Decorator({
        message: '注册失败，用户名或邮箱已被占用'
      })
      return
    }
    let salt = bcrypt.genSaltSync(10)
    await UserProxy.newAndSave(ctx, loginname, loginname, bcrypt.hashSync(pass, salt), email, true).then(async (user) => {
      ctx.body = Decorator({
        message: '注册成功',
        data: user
      })
    }).catch((err) => {
      ctx.body = Decorator({
        err: err.toString()
      })
    })

  }).catch((err) => {
    ctx.body = Decorator({
      err: err.toString()
    })
  })
}

exports.signin = async function (ctx, next) {
  let {loginname, pass} = JSON.parse(ctx.request.body)
  if ([loginname, pass].every((item) => {
    return item === ''
  })) {
  ctx.body = Decorator({
      message: '信息不完整',
      err: 'Prop Invalid'
    })
    return
  }

  let users = await UserProxy.getUsersByQuery({
    '$or': [{'loginname': loginname}]
  }, {})

  if (!users) {
    ctx.body = Decorator({
      message: '该用户不存在'
    })
    return
  }

  let checked = bcrypt.compareSync(pass, users[0].pass)
  
  if (checked) {
    try {
      let token = UserProxy.makeAccessToken(ctx, users[0])
      await UserProxy.updateUserAccessToken(users[0], token)
      ctx.body = Decorator({
        data: {
          message: 'successful',
          token: token
        }
      })
    } catch (err) {
      ctx.body = Decorator({
        message: '更新Token失败',
        err: err.toString()
      })
    }
  } else {
    ctx.body = Decorator({
      message: '密码或用户名错误'
    })
  }
}