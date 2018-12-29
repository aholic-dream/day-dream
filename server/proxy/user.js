const User = require('../models/schema/user')
const uuid = require('node-uuid')
const bhash = require('../common/tools').bhash
const jsonwebtoken = require('jsonwebtoken')

exports.getUserByName = function (name, callback) {
  return User.find({name: name})
}

/**
 * 根据关键字，获取一组用户
 * Callback:
 * - err, 数据库异常
 * - users, 用户列表
 * @param {String} query 关键字
 * @param {Object} opt 选项
 */
exports.getUsersByQuery = function (query, opt) {
  return User.find(query, '', opt)
}
/**
 * 根据关键字，获取一个用户
 * @param {String} query 关键字
 * @param {Object} update 更新项
 */
exports.getUserByQueryAndUpdate = function (query, update) {
  return User.findOneAndUpdate(query, update)
}
exports.updateUserAccessToken = function (user, token) {
  return User.update({loginname: user.loginname}, {accessToken: token})
}
/**
 * 新建用户
 * @param {Object} active 激活
 * */ 
exports.newAndSave = function (ctx, name, loginname, pass, email, active) {
  let user = new User()
  user.name = name
  user.loginname = loginname
  user.pass = pass
  user.email = email
  user.active = active || false
  user.accessToken = jsonwebtoken.sign({
    name: loginname,
    email: email,
    _id: user._id,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
  }, ctx.secret)

  return user.save()
}

exports.makeAccessToken = function (ctx, user) {
  return jsonwebtoken.sign({
    name: user.loginname,
    email: user.email,
    _id: user._id,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
  }, ctx.secret)
}