const path = require('path')
const fs = require('fs')
const Posts = require('../../models/post')

exports.getAll = async () => {
	return await Posts.find({}).sort({_id: -1}).exec()
}

exports.createPost = async (data) => {
	const post = await new Posts(data).save()
	return post
}

exports.removePost = async (id) => {
	const deleted = await Posts.deleteOne({_id: id}).exec()
	return deleted
}