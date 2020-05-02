/**
 * 
 *     var [currentNumber, setCurrentNumber] = useState(1);
    var [isLoading, setIsLoading] = useState(false);
 * 
 useEffect(
        () => {
            setInterval(() => {
                var cycle, delta;

                // console.log("len: " + len);
                // console.log("currentNumber: " + currentNumber); // verkar vara nyckeln
                // var cycle, delta;


                // if (gallery.is(':not(:animated)')) {

                //     cycle = false;
                //     delta = (event.currentTarget.id === "prev") ? -1 : 1;
                //     // in the example buttons have id "prev" or "next" 

                //     gallery.animate({ left: "+=" + (-100 * delta) }, function () {

                //         setCurrentNumber(currentNumber += delta);
                //         console.log(currentNumber);
                //         //current += delta;

                //         /* 
                //          * we're cycling the slider when the the value of "current" 
                //          * variable (after increment/decrement) is 0 or when it exceeds
                //          * the initial gallery length*/

                //         cycle = (currentNumber === 0 || currentNumber > len);

                //         if (cycle) {
                //             /* we switched from image 1 to 4-cloned or 
                //                from image 4 to 1-cloned */
                //             setCurrentNumber((currentNumber === 0) ? len : 1);
                //             console.log("slutfas: " + currentNumber)
                //             //gallery.css({ left: -100 * currentNumber });
                //             setIsLoading(true);
                //         }
                //     });
                // }
            }, 2000);
        }, []);
 */

useEffect(
    () => {
        var gallery = $('#gallery ul'),
            items = gallery.find('li'),
            len = items.length,
            current = 1,   //the item we're currently looking 

            first = items.filter(':first'),
            last = items.filter(':last'),
            triggers = $('button');
        //triggers = $('button');

        // 1. Cloning first and last item 
        first.before(last.clone(true));
        last.after(first.clone(true));





        /*
        // 2. Set button handlers 
        triggers.on('click', function() {
          console.log("len: " + len);
          console.log("current: " + current); // verkar vara nyckeln
          var cycle, delta;
          console.log("cycle: " + cycle);
          console.log("delta: " + delta)
      
          if (gallery.is(':not(:animated)')) {
      
              cycle = false;
              delta = (this.id === "prev")? -1 : 1;
              // in the example buttons have id "prev" or "next" 
      
              gallery.animate({ left: "+=" + (-100 * delta) }, function() {
      
                  current += delta;
                  console.log("current: " + current);
      
                  /** 
                   * we're cycling the slider when the the value of "current" 
                   * variable (after increment/decrement) is 0 or when it exceeds
                   * the initial gallery length*/

        /*  
 cycle = (current === 0 || current > len);

 if (cycle) {
     /* we switched from image 1 to 4-cloned or 
        from image 4 to 1-cloned *//*
     current = (current === 0)? len : 1; 
     console.log("slutfas: " + current)
     gallery.css({left:  -100 * current });
 }
});   
}

});*/


    }, []);

    useEffect(
        () => {
            // do something
            if (isLoading === true) { //allt detta verkar helt nödvändigt 1.för att inte köras dubbelt osv
                var gallery = $('#gallery ul');
                console.log("slutfas: " + currentNumber)
                gallery.css({ left: -100 * currentNumber });
                setIsLoading(false);
            }
        },
        [isLoading, currentNumber],
    );

    const onClickers = (event) => {
        console.log(event.currentTarget.id);

        var gallery = $('#gallery ul'),
            items = gallery.find('li'),
            len = items.length - 2; //denna räknar efter 2 kloner skapats, finns säkert bättre sätt
        //current = 1;
        //cycle, 
        //delta;   //the item we're currently looking 
        var cycle, delta;

        console.log("len: " + len);
        console.log("currentNumber: " + currentNumber); // verkar vara nyckeln
        var cycle, delta;
        console.log("cycle: " + cycle);
        console.log("delta: " + delta)

        if (gallery.is(':not(:animated)')) {

            cycle = false;
            delta = (event.currentTarget.id === "prev") ? -1 : 1;
            // in the example buttons have id "prev" or "next" 

            gallery.animate({ left: "+=" + (-100 * delta) }, function () {

                setCurrentNumber(currentNumber += delta);
                console.log(currentNumber);
                //current += delta;

                /* 
                 * we're cycling the slider when the the value of "current" 
                 * variable (after increment/decrement) is 0 or when it exceeds
                 * the initial gallery length*/

                cycle = (currentNumber === 0 || currentNumber > len);

                if (cycle) {
                    /* we switched from image 1 to 4-cloned or 
                       from image 4 to 1-cloned */
                    setCurrentNumber((currentNumber === 0) ? len : 1);
                    console.log("slutfas: " + currentNumber)
                    //gallery.css({ left: -100 * currentNumber });
                    setIsLoading(true);
                }
            });
        }

    }

    /*
    $(function() {
 
        var gallery = $('#gallery ul'),
            items   = gallery.find('li'),
            len     = items.length,
            current = 1,   //the item we're currently looking 
      
            first   = items.filter(':first'),
            last    = items.filter(':last'),
      
            triggers = $('button');
      
        /* 1. Cloning first and last item 
        first.before(last.clone(true)); 
        last.after(first.clone(true)); 
      
        /* 2. Set button handlers 
        triggers.on('click', function() {
      
          var cycle, delta;
      
          if (gallery.is(':not(:animated)')) {
      
              cycle = false;
              delta = (this.id === "prev")? -1 : 1;
              /* in the example buttons have id "prev" or "next" 
      
              gallery.animate({ left: "+=" + (-100 * delta) }, function() {
      
                  current += delta;
      
                  /** 
                   * we're cycling the slider when the the value of "current" 
                   * variable (after increment/decrement) is 0 or when it exceeds
                   * the initial gallery length
                            
                  cycle = (current === 0 || current > len);
      
                  if (cycle) {
                      /* we switched from image 1 to 4-cloned or 
                         from image 4 to 1-cloned 
                      current = (current === 0)? len : 1; 
                      gallery.css({left:  -100 * current });
                  }
              });   
           }
      
        });
      });*/

      const reply_click = () => { //ett försök till JS från Jquery, en riktig reactlösning är betydligt större
        var clicker = document.getElementById('gallery');
        var realGal = document.querySelectorAll('#gallery>ul');
        //var lis = document.getElementById("navbar").getElementsByTagName("li");
        clicker.style.backgroundColor = "red";
        var list = clicker.getElementsByTagName("li");
        console.log(clicker);
        console.log(realGal);
        console.log(list);
        //var items   = clicker.find('li');
        //var len     = items.length;
        var current = 1;   //the item we're currently looking 

        //var first = list.filter(':first');
        //(var last = list.filter(':last');
        var firstItem = list[0];
        var cln1 = firstItem.cloneNode(true);
        console.log(firstItem)
        console.log("clone: " + cln1)
        var last = list[list.length - 1];
        var cln2 = last.cloneNode(true);
        console.log(document.querySelectorAll("ul > li:first-child"))

        //list.insertBefore(last, list.childNodes[0]);
        document.getElementById('realGall').appendChild(cln1);
        document.getElementById('realGall').insertBefore(cln2, list[0]);

        // Cloning first and last item 
        //first.before(last.clone(true)); 
        //last.after(first.clone(true)); 
    }


    <label for="overflow">This checkbox toggles <b>overflow: hidden</b> property on the gallery <br /> to see the effect when a mask is applied:</label>
    <input type="checkbox" id={styles.overflow} />

    <div className={styles.downloadPictures} id="para">
    <ImageCarousel />



    <div className={styles.gallery} id={"gallery"}>

        <ul id={"realGall"}>
            <li><img src={pic1} /></li>
            <li><img src={pic2} /></li>
            <li><img src={pic3} /></li>
            <li><img src={pic4} /></li>
        </ul>

    </div>

    <button
        onClick={(event) => onClickers(event)}
        //onClick={(event) => console.log(event.currentTarget.id)}
        className={styles.tempButton}
        type="button"
        id="prev">&laquo;</button>
    <button
        onClick={(event) => onClickers(event)}
        className={styles.tempButton}
        type="button"
        id="next">&raquo;</button>
</div>

</div>