// Template.bookmarkAdd.events({
// 	'submit form.form-add': function (e,tpl) {
// 		e.preventDefault();

// 		var name = tpl.$('#bookmark_name').val();
// 		var url = tpl.$('#bookmark_url').var();
// 		if (name!=null && url!=null && name!="" && url!=""){
// 			 Bookmarks.insert({name:name,url:url}, function (err) {
// 				if(!err){
// 					tpl.$('#bookmark_name').val('');
// 					tpl.$('#bookmark_url').val('');


// 					Router.go('/');
// 				}
// 			}) 
// 		}
// 		else{
// 			 alert("请填写完整！"); 
// 			 Router.go('/');
		
// 		}
			
		
// 	}
// })
Template.bookmarkAdd.events({
	'submit form.form-add':function (e,tpl) {

		e.preventDefault();

		var uid=Meteor.user()._id;
		var name=tpl.$('#bookmark_name').val();
		var url=tpl.$('#bookmark_url').val();

		if(name!=null && name!='' && url!=null && url!=''){
				Bookmarks.insert({name:name,url:url,owner:uid},function (err) {
				if(!err){
					tpl.$('#bookmark_name').val('');
					tpl.$('#bookmark_url').val('');

					Router.go('/');
				}

			})
		}
		else{
			alert('请填写完整！');
			Router.go('/');
		}
		
	}
})