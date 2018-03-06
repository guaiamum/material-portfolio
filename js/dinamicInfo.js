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
    var container = $('#experiences').find('#cd-timeline');

    var div = $('<div>',{class: 'cd-timeline-block'});
    var circle = $('<div>',{class: 'cd-timeline-img amarelo'}); //YELLOW
    var content = $('<div>',{class: 'cd-timeline-content'});

    var title = $('<h2>',{ class: 'job-title' ,html: e.title });

    var map = '<i class="tiny material-icons">location_on</i> ';
    var location = $('<span>',{ class: 'job-location cd-location cd-date', html: map + e.company + ', ' + e.location });
    var calendar = '<i class="tiny material-icons">date_range</i> ';
    var duration = $('<span>',{ class: 'job-duration cd-date', html: calendar + e.dateBegin +' - '+ e.dateEnd });

    var description = $('<p>',{ class: 'job-description',html: e.description });
    var tasks =  $('<ul>', { class: 'job-tasks'});
    e.tasks.forEach((task) => {var currTask = $('<li>',{ html: task }); tasks.append(currTask);});
    //var thanks = $('<small>',{html: e.thanks});

    content.append(title,'<hr/>',description.append(tasks),location,'<br/>',duration);
    container.append(div.append(circle,content));
  });

// EDUCATION
  user.schools.forEach((e,i) => {
    var container = $('#education').find('#cd-timeline');

    var div = $('<div>',{class: 'cd-timeline-block'});
    var circle = $('<div>',{class: 'cd-timeline-img verde'}); //GREEN
    var content = $('<div>',{class: 'cd-timeline-content'});

    var title = $('<h2>',{ class: 'school-title' ,html: e.title });

    var calendar = '<i class="tiny material-icons">date_range</i> ';
    var duration = $('<span>',{ class: 'school-duration cd-date cd-location', html: calendar + e.dateBegin +' - '+ e.dateEnd });

    // var location = $('<h4>',{ html: '<i class="tiny material-icons">location_on</i> ' + e.location});
    var description = $('<h4>',{ class: 'school-description',html: '<i class="tiny material-icons">location_on</i> ' + e.name + " - " + e.location});

    content.append(title, description, location ,duration);
    container.append(div.append(circle,content));
  });


}
