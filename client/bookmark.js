Template.bookmark.events({


	'click span.remove':function (e,tpl) {
		if(confirm('确定删除此书签  ? ')){
			var id=this._id;
			Bookmarks.remove({ _id:id });
		}
	},
	'click span.edit':function (e,tpl) {
		Session.set('currentEditingId',this._id);
	},
	'click .btn-cancel':function (e,tpl) {
		e.preventDefault();
		Session.set('currentEditingId',null);
	},
	'submit form.form-edit':function (e,tpl) {
		e.preventDefault();
		var id=this._id;
		var name=tpl.$('#bookmark_name').val();
		var url=tpl.$('#bookmark_url').val();
		Bookmarks.update({_id:id},{$set:{name:name,url:url}},
			function (err) {
				if(!err){
					tpl.$('#bookmark_name').val('');
					tpl.$('#bookmark_url').val('');
					Session.set('currentEditingId',null);
				}
			});
	}
});

Template.bookmark.helpers({
	isEditing:function () {
		return Session.get('currentEditingId')==this._id;
	}
});