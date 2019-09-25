function table(){
    var titles = ["Investors With $16 Trillion Want Deforestation Action", "Brazilian Amazon fires scientifically linked to 2019 deforestation: report", "Will Deforestation and Warming Push the Amazon to a Tipping Point?", "Amazon fires clearly linked to deforestation, scientists say", "The Amazon is burning at record rates—and deforestation is to blame", "10 Things You Need to Know About the Fires in the Amazon", "Amazon deforestation and development heighten Amazon fire risk: study", "Editorial: Climate change is already here. 2020 could be your last chance to stop an apocalypse", "Global Warming Has Been Influencing Drought for a Century", "Mediterranean climate': California drought ends after more than 7 years, but dry conditions will return", "Developing nations should increase carbon footprint to tackle hunger: Study", "Poor countries must increase carbon footprint to address hunger, says study", "How to Get Rid of Carbon Emissions: Pay Farmers to Bury Them", "Climate Change Is Having Widespread Health Impacts", "Climate Change Is Already Hitting Europe Harder Than Anyone Expected", "The hard truths of climate change — by the numbers", "Global Warming Is Conquering the Vikings", "Why Are Hurricanes Like Dorian Stalling and Is Global Warming Involved?", "Earth’s Orbital Shifts May Have Triggered Ancient Global Warming"],
    tr;
    titles.forEach((v, i) => {
    var td = document.createElement('td');
    tr = document.createElement('tr');
    document.getElementById('table').appendChild(tr);
    td.appendChild(document.createTextNode(v));
    tr.appendChild(td);
    });
}