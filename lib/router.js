// Router.route('/', function () {
//   this.render('Home', {
//     data: function () { return Items.findOne({_id: this.params._id}); }
//   });
// });
//     
Router.configure({
	layoutTemplate:"layout"
});
Router.route('',{name:'bookmarkList'});
Router.route('/add',{name:'bookmarkAdd'});


Router.route('/edit/:_id',{name:'bookmarkEdit',data:function () {
	return Bookmarks.findOne(this.params._id);
}});

var requireLogin=function () {
	if(!Meteor.user()){
		Router.go('/');

	}
	this.next();
}
Router.onBeforeAction(requireLogin,{only:['bookmarkList','bookmarkAdd','bookmarkEdit']});