var blogs=[
    {
        title: 'James Harden dan Nikola Jokic Akhirnya Tiba di Orlando',
        news : 'Dua bintang NBA akhirnya tiba di “gelembung” NBA yang berada di Orlando, Florida, Amerika Serikat. Keduanya adalah bintang Houston Rockets, James Ha...',
        img :'img/blog/harden.png',
        singleLink : 'single-blog-harden.html'
    },
    {
        title: 'Alami Cedera Engkel, De’Aaron Fox Mungkin Absen di Laga Uji Coba',
        news : 'Kabar buruk kembali mendatangi Sacramento Kings. Setelah kapten mereka, Harrison Barnes, masih belum bisa bergabung lantaran positif virus korona, Kings harus k...',
        img :'img/blog/fox.png',
        singleLink : 'single-blog-fox.html'
    },
    {
        title: 'LeBron James Tak Pasang Pesan Sosial di Jersei',
        news : 'Kelanjutan musim NBA di Orlando, Florida, Amerika Serikat sempat terancam batal karena dua hal utama. Pertama, tentunya karena penyebaran virus korona sendiri y...',
        img :'img/blog/james.png',
        singleLink : 'single-blog-james.html'
    }
];

var blogContent='';
for (var i = 0; i < blogs.length; i++) 
    {
    blogContent +='<div class="col-lg-4 mb-5 mb-lg-0">'+
                '<div class="blog_left_sidebar">'+
                    '<article class="blog_item">'+
                        '<div class="blog_item_img">'+
                            '<img class="card-img rounded-0" src='+ blogs[i].img + '>'+
                        '</div>'+

                        '<div class="blog_details">'+
                            '<a class="d-inline-block" href="'+ blogs[i].singleLink +'">'+
                                '<h2>'+ blogs[i].title + '</h2>'+
                            '</a>'+
                            '<p>'+ blogs[i].news +'</p>'+
                            '<ul class="blog-info-link">'+
                                '<li><span class="badge badge-light"><a href="'+ blogs[i].singleLink +'">Read More ...</a></span></li>'+
                            '</ul>'+
                        '</div>'+
                    '</article>'+
                '</div>'+
            '</div>';

   }
   document.getElementById("blogContent").innerHTML = blogContent;