const reviews = [
    {   img: '/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
        name: 'John Smith',
        job: 'UI Designer',
        text: 'Boudin biltong brisket picanha tongue ground round sirloin beef jowl leberkas landjaeger drumstick ham hock. Filet mignon venison brisket, doner porchetta turducken leberkas bacon cow pastrami sausage jowl beef ribs pork loin corned beef.'
    },

    {   img: '/lucas-gouvea-aoEwuEH7YAs-unsplash.jpg',
        name: 'John Mensah',
        job: 'UX Designer',
        text: 'Laborum alcatra beef ribs elit kevin, andouille aliquip spare ribs consequat prosciutto velit short ribs tongue ham hock. Officia mollit enim fatback sunt tail ham hock voluptate tri-tip meatball short ribs.'
    },

    {   img: '/juno-jo-nwdPxI1h4NQ-unsplash.jpg',
        name: 'Nojan Namdar',
        job: 'YouTube Programmer',
        text: 'Minim ball tip sausage sed, ground round exercitation cupim tail boudin jerky. Officia pig minim boudin, kevin deserunt alcatra sirloin nostrud ea. Ham hock brisket ut nulla laborum. Minim exercitation tenderloin, tri-tip deserunt chuck elit laboris bacon pariatur venison.'
    },

    {   img: 'houcine-ncib-B4TjXnI0Y2c-unsplash.jpg',
        name: 'Michelle Antwi',
        job: 'Software Engineer',
        text: 'Bacon ipsum dolor amet bresaola strip steak corned beef, kielbasa meatball beef cupim doner drumstick shank spare ribs jowl picanha pig. Tenderloin leberkas alcatra, jowl kielbasa pork loin pancetta pork chop porchetta. Cow tail chislic, ham pork turkey bresaola tenderloin burgdoggen venison.'
    },

    {   img: '/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg',
        name: 'Jack Townsend',
        job: 'Data Scientist',
        text: 'Corned beef tenderloin chislic, pig tri-tip spare ribs turkey buffalo ham hock chicken beef ribs hamburger fatback brisket. Ham hock pig ham beef. Turducken bacon brisket hamburger andouille meatball corned beef filet mignon alcatra short ribs frankfurter turkey shank'
    },

    {   img: '/nojan-namdar-dUtizJyby4E-unsplash.jpg',
        name: 'Esther Hill',
        job: 'IT Consultant',
        text: 'Filet mignon ham jowl sausage pig capicola meatloaf tenderloin bresaola spare ribs. Ham picanha jerky beef ribs. Meatball biltong fatback brisket. Buffalo short loin chicken chuck burgdoggen frankfurter meatloaf venison turkey pork loin pork tri-tip boudin pig strip steak.'
    }
]

//selections
const img = document.querySelector('img');
const name = document.querySelector('h2');
const job = document.querySelector('h3');
const text = document.querySelector('p');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const surprise = document.querySelector('button');

//current iterating value
let currentItem = 0;

//show card function
function showCard(card) {
    const item = reviews[card];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

//show new card
nextBtn.addEventListener('click', function() {
    if (currentItem < reviews.length - 1) {
        currentItem ++;
    }
    else {
        currentItem = 0;
    }
    showCard(currentItem);
})

prevBtn.addEventListener('click', function() {
    currentItem --
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showCard(currentItem);
})

//show random card
function showRandom() {
    currentItem = Math.floor((Math.random() * reviews.length));
}

surprise.addEventListener('click', function() {
    showRandom();
    showCard(currentItem);
})