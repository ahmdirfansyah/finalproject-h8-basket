var ballers=[
    {
        img :'img/team/FaisalAmri.png',
        name : 'Faisal Amri',
        position : 'Advisor'
    },
    {
        img :'img/team/AonRahadian.png',
        name : 'Aon Rahadian',
        position : 'Advisor'
    },
    {
        img :'img/team/AndrewBasti.png',
        name : 'Andrew Basti',
        position : 'Small Forward (SF)'
    },
    {
        img :'img/team/HarisBudiman.png',
        name : 'Haris Budiman',
        position : 'Small Forward (SF)'
    },
    {
        img :'img/team/MuhammadFadly.png',
        name : 'Muhammad Fadly',
        position : 'Point Guard (PG)'
    },
    {
        img :'img/team/Manda.png',
        name : 'Manda',
        position : 'Power Forward (PF)'
    },
    {
        img :'img/team/AidilSyahputra.png',
        name : 'Aidil Syahputra',
        position : 'Center (C)'
    },
    {
        img :'img/team/AhmadIrfansyah.png',
        name : 'Ahmad Irfansyah',
        position : 'Power Forward (PF)'
    },
    {
        img :'img/team/RianOktora.png',
        name : 'Rian Oktora',
        position : 'Power Forward (PF)'
    },
    {
        img :'img/team/Annas.png',
        name : 'Annas',
        position : 'Center (C)'
    },
    {
        img :'img/team/ReyhandiBayu.png',
        name : 'Reyhandi Bayu',
        position : 'Shooting Guard (SG)'
    },
    {
        img :'img/team/Noval.png',
        name : 'Noval',
        position : 'Shooting Guard (SG)'
    }
];

var ballersContent='';
for (var i = 0; i < ballers.length; i++) 
    {
    ballersContent +='<div class="col-xl-4 col-md-6 col-lg-4">'+
    '<div class="single_master">'+
        '<div class="thumb">'+
            '<img src=' + ballers[i].img + '>'+
            '<div class="social_link">'+
                '<a href="#"><i class="fa fa-envelope"></i></a>'+
                '<a href="#"><i class="fa fa-twitter"></i></a>'+
                '<a href="#"><i class="fa fa-linkedin"></i></a>'+
            '</div>'+
        '</div>'+
        '<div class="master_name text-center">'+
            '<h3>' + ballers[i].name +'</h3>'+
            '<p><b>' + ballers[i].position +'</b></p>'+
        '</div>'+
    '</div>'+
'</div>';
   }
   document.getElementById("ballersContent").innerHTML = ballersContent;