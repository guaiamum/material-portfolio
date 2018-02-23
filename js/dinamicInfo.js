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
  var skillsContainer = $('#skills-have');
  user.skills.forEach((e) => {
    skillsContainer.append(
      $('<div>',{class:'skill tooltipped','data-position':'bottom','data-tooltip': e.description}).append(
        $('<div>',{class:'skill-content'}).append(
          $('<div>',{class:'center-flex',html: e.title}))));
  });

  skillsContainer = $('#skills-want');
  user.skillsWanted.forEach((e) => {
    skillsContainer.append(
      $('<div>',{class:'skill tooltipped','data-position':'bottom','data-tooltip': e.description}).append(
        $('<div>',{class:'skill-content'}).append(
          $('<div>',{class:'center-flex',html: e.title}))));
  });

  //Initializes tooltipped's object's
  $('.tooltipped').tooltip({delay: 15});

// EXPERIENCES
  user.jobs.forEach((e,i) => {
    var container = $('#experiences');

    var div = $('<div>',{class: 'xp col'})
    var title = $('<h5>',{ html: e.subtitle });

    var map = '<i class="tiny material-icons">location_on</i> ';
    var location = $('<p>',{ class: 'job-location', html: map + e.company + ', ' + e.location });

    var calendar = '<i class="tiny material-icons">date_range</i> ';
    var duration = $('<p>',{ class: 'job-duration', html: calendar + e.dateBegin +' - '+ e.dateEnd });

    var description = $('<p>',{ class: 'job-description',html: e.description });
    var tasks =  $('<ul>', { class: 'job-tasks'});
    e.tasks.forEach((task) => {var currTask = $('<li>',{ html: task }); tasks.append(currTask);});

    container.append(div.append(title,'<hr/>',location,duration,description.append(tasks)));
  });

}
