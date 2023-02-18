Game.registerMod("fortuneFacts",{//this string needs to match the ID provided in your info.txt
    init:function(){
        var list=
        [
            'Fun Fact: The average American will eat 35,000 cookies in their lifetime.',
            'Fun Fact: The world\'s largest chocolate chip cookie weighed in at more than 40,000 pounds! This cookie was 102-feet-wide.',
            'Fun Fact: The chocolate chip cookie is the official USA state cookie of both Massachusetts and Pennsylvania.',
            'Fun Fact: Americans consume over 2 billion cookies a year, or 300 cookies for each person annually.',
            'Fun Fact: America has designated April 30th as National Oatmeal Cookie Day!',
            'Fun Fact: Flavor up your chocolate chip cookies by letting the prepared dough sit in the refrigerator for 24 to 36 hours before baking. This is one of our secrets to our great tasting cookies!',
            'Fun Fact: Santa Claus eats an estimated 336,150,386 cookies on Christmas Eve.',
            'Fun Fact: Animal Crackers, introduced by Nabisco in 1902, were the first commercial cookie to be mass-produced in the U.S.',
            'Fun Fact: 54 different animals have been represented in Animal Crackers.',
            'Fun Fact: The Oreo was the best selling cookie of the 20th century.',
            'Fun Fact: Americans spend $550 million on Oreos each year.',
            'Fun Fact: Girl Scouts sell 200 million boxes of cookies a year.',
            'Fun Fact: Queen Elizabeth I (1533-1603) is credited with overseeing the first biscuits cut into the shape of men from ginger dough, the precursor to today\'s gingerbread men.',
            'Fun Fact: Massachusetts adopted the chocolate chip cookie as its official state cookie in 1997.',
            'Fun Fact: Chocolate chip cookies were invented in 1930 at the Toll House Resturant in Whitman, Massachusetts.',
            'Fun Fact: Legislation in Pennsylvania to designate an official state cookie has been held up for several years as state lawmakers struggle to chose between the Nazareth Sugar Cookie and the Chocolate Chip Cookie.',
            'Fun Fact: In 2004 a bill was introduced to the Michigan state legislature by a group of fourth graders, requesting that the Michigan Treasure Cookie be adopted as the official state cookie.',
            'Fun Fact: There are 212 different types of cookies.',
            'Fun Fact: Wrath cookies taste somewhere in-between blood sausages and seawater.',
            'Fun Fact: '
        ];
        Game.registerHook('ticker', ()=>{return list})
    }
});