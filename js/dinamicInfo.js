function loadInfo(user){
  var profileInfo = $('#profile-nav');

  // MAIN INFO
  profileInfo.find('#profile-subtitle').html(user.subtitle);
  profileInfo.find('#profile-name').html(user.name);
  profileInfo.find('#user-img').attr('src',user.thumbnail);
  // LINKS
  user.links.forEach((e) => {
    profileInfo.find(e.id).closest('a').attr('href',e.href);
  });

  // SKILLS
  var skillsHave = $('#skills-have');
  user.skills.forEach((e) => {
    skillsHave.append(
      $('<div>',{class:'skill tooltipped','data-position':'bottom','data-tooltip': e.description}).append(
        $('<div>',{class:'skill-content'}).append(
          $('<div>',{class:'center-flex',html: e.title}))));
  });


  //Initializes tooltipped's object's
  $('.tooltipped').tooltip({delay: 50});
}
