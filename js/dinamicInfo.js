function loadInfo(user){
  var profileInfo = $('#profile-info');

  profileInfo.find('#profile-subtitle').html(user.subtitle);
  profileInfo.find('#profile-name').html(user.name);
  // IMAGES
  profileInfo.find('#user-img').attr('src',user.thumbnail);

  user.links.forEach((e) => {
    profileInfo.find(e.id).closest('a').attr('href',e.href);
  });
}
