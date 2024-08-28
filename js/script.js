document.addEventListener('DOMContentLoaded', ()=>{
    // the home page
    const flowers = document.querySelectorAll('.flowerid')
 
    flowers.forEach(flower => {
        flower.addEventListener('click', ()=>
            {   
                const flowerid = flower.getAttribute('id')
                window.location.href = `flowerCard.html?id=${flowerid}`
            })
    })

    // the details page
    const flowerDetail = document.querySelector('#mainCard')
    if(flowerDetail){
        const Id = new URLSearchParams(window.location.search).get('id')
        
        displayDetails(Id)
        
    }

})

function displayDetails(id){
  
const flowers = {
    rose: {
        name: 'Rose',
        description: 'Roses are timeless classics, known for their beauty and fragrance. They come in a wide range of colors and varieties, from hybrid teas to floribundas, each with its unique charm. Whether grown in a garden bed or as part of a landscape, roses can be the highlight of any garden.',
        tip1: 'Feed roses regularly with a balanced fertilizer for strong blooms.',
        tip2: ' Keep an eye out for aphids and treat them promptly.',
        tip3: 'Mulch around the base to retain moisture and suppress weeds.',
        plantseas: 'Spring or Fall',
        bloomseas:'Late Spring to Fall',
        water:'Water deeply twice a week',
        location: 'Full Sun',
        img: '/res/rose.jpeg',
    },
    sunflower:{
        name: 'Sunflower',
        description: "Sunflowers are bold, bright, and instantly recognizable. Known for their towering height and large, cheerful faces, sunflowers are a favorite in gardens. They're not only beautiful but also beneficial, as they can attract pollinators and provide seeds for birds.",
        tip1: ' Tall varieties may need staking to prevent them from toppling over.',
        tip2: 'Space seeds adequately to allow each plant to reach its full potential.',
        tip3: ' Water deeply but infrequently to encourage strong roots.',
        plantseas: 'Late Spring',
        bloomseas:'Summer to Early Fall',
        water:'Water daily',
        location: 'Full Sun',
        img: '/res/sunflower.jpeg',
    },
    lavender:{
        name: 'Lavender',
        description: "Lavender is a fragrant herb that's not only beautiful but also useful. It produces spikes of purple flowers that attract bees and other pollinators. Lavender is often used in sachets, oils, and as an aromatic addition to gardens.",
        tip1: 'Lightly prune after blooming to maintain shape and promote new growth.',
        tip2: 'Lavender thrives in well-drained, slightly alkaline soil.',
        tip3: 'Lavender needs at least 6 hours of sunlight a day.',
        plantseas: 'Spring',
        bloomseas:'Summer',
        water:'Water once a week',
        location: 'Full sun',
        img: '/res/lavender.jpeg',
    },
    
    tulip:{
        name: 'Tulips',
        description: "Tulips are spring-blooming perennials that come in a dazzling array of colors and shapes. They're known for their simple beauty and are often associated with the arrival of spring. Tulips are perfect for adding a splash of color to your garden or as cut flowers for your home.",
        tip1: 'Ensure well-drained soil to prevent bulb rot.',
        tip2: 'Allow the foliage to die back naturally to feed the bulbs for next year.',
        tip3: "Store bulbs in a cool, dry place if you're lifting them after blooming.",
        plantseas: 'Fall',
        bloomseas:'Spring',
        water:'Watermoderately when soil is dry',
        location: 'Full Sun to Partial Sun',
        img: '/res/tulip.jpeg',
    },

    marigold:{
        name: 'Marigold',
        description: 'Marigolds are vibrant, easy-to-grow flowers that are beloved for their bright colors and ability to repel pests. They are commonly used in gardens as companion plants to vegetables, thanks to their natural ability to deter harmful insects.',
        tip1: 'Regularly deadhead spent blooms to encourage continuous flowering.',
        tip2: 'Marigolds thrive in well-drained, moderately fertile soil.',
        tip3: 'Water at the base of the plant to avoid wetting the foliage, which can lead to disease',
        plantseas: 'Spring',
        bloomseas:'Summer to Fall',
        water:'Water daily during hot weather',
        location: 'Full Sun',
        img: '/res/marigolds.jpeg',
    },

}

const target = flowers[id]
const details = document.getElementById('mainCard')

if(target){
    details.innerHTML = `        
            <div id="title">
            <img src="/res/logoG.png" alt="logo">
            <h1>${target.name}</h1>
        </div>
        <div id="fullCard">
        <div id="data">
            <p>${target.description}</p>
            <ul id="tips">
                <li>${target.tip1}</li>
                <li>${target.tip2}</li>
                <li>${target.tip3}</li>
            </ul>
            <div id="iconData">
                <img src="/res/iconLeaf.png" alt="icon" class="icon">
                <p>${target.plantseas}</p>
                <img src="/res/iconBloom.png" alt="icon"  class="icon">
                <p>${target.bloomseas}</p>
                <img src="/res/iconWater.png" alt="icon"  class="icon">
                <p>${target.water}</p>
                <img src="/res/iconSun.png" alt="icon"  class="icon">
                <p>${target.location}</p>
            </div>
            
        </div>
        <img src="${target.img}" alt="flower" id="theflowerimg">
    </div>`
}
else{
    details.innerHTML = `<h1> flower not found</h1>`
}

}
