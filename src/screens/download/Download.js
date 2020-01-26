import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import styles from './style.module.css';

import logo from '../../assets/icons/baby.png';
import pic1 from '../../assets/imgs/satisfactory.png';
import pic2 from '../../assets/imgs/playerunknown.png';
import pic3 from '../../assets/imgs/shadowgun.png';
import pic4 from '../../assets/imgs/flame.png';

const picArr = [
    pic1, pic2, pic3
];

const Download = () => {

    const [platform, setPlatform] = useState("Platform");
    var [currentNumber, setCurrentNumber] = useState(1);
    var [isLoading, setIsLoading] = useState(false);




    useEffect(
        () => {
            setInterval(() => {
                console.log("woopsie!")
            }, 2000);
        }, []);

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
            var OSName = "Unknown";
            if (window.navigator.userAgent.indexOf("Windows NT 10.0") !== -1) OSName = "Windows 10";
            if (window.navigator.userAgent.indexOf("Windows NT 6.2") !== -1) OSName = "Windows 8";
            if (window.navigator.userAgent.indexOf("Windows NT 6.1") !== -1) OSName = "Windows 7";
            if (window.navigator.userAgent.indexOf("Windows NT 6.0") !== -1) OSName = "Windows Vista";
            if (window.navigator.userAgent.indexOf("Windows NT 5.1") !== -1) OSName = "Windows XP";
            if (window.navigator.userAgent.indexOf("Windows NT 5.0") !== -1) OSName = "Windows 2000";
            if (window.navigator.userAgent.indexOf("Mac") !== -1) OSName = "Mac/iOS";
            if (window.navigator.userAgent.indexOf("X11") !== -1) OSName = "UNIX";
            if (window.navigator.userAgent.indexOf("Linux") !== -1) OSName = "Linux";

            setPlatform(OSName);
        },
        [],
    );

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
        [isLoading],
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


    return (
        <div className={styles.pageContainer}>
            <div className={styles.downloadContainer}>
                <div className={styles.downloadWrapper}>
                    <div className={styles.downloadInfo}>
                        <div className={styles.downloadTitle}>Hämta Mutate App för {platform}</div>
                        <div className={styles.downloadSlogan}>Get straight (or gay) into the action</div>
                        <div className={styles.featureContainer}>
                            <img
                                src={logo}
                                className={styles.logo}
                                alt="logo"
                                onClick={() => {
                                    console.log("clicked!!");
                                    //this.props.history.push("/");
                                }} />
                            <span className={styles.featureText}>Your games in one place</span>
                        </div>
                        <div className={styles.featureContainer}>
                            <img
                                src={logo}
                                className={styles.logo}
                                alt="logo"
                                onClick={() => {
                                    console.log("clicked!!");
                                    //this.props.history.push("/");
                                }} />
                            <span className={styles.featureText}>Connect with friends</span>
                        </div>
                        <a
                            href="//discordapp.com/api/download?platform=win"
                            alt="download mutate"
                            className={styles.downloadButton}
                        >
                            Ladda ned nu!
                        </a>
                    </div>
                    <div id={styles.penis}></div>
                    <div className={styles.downloadPictures} id="para">

                        <label for="overflow">This checkbox toggles <b>overflow: hidden</b> property on the gallery <br /> to see the effect when a mask is applied:</label>
                        <input type="checkbox" id={styles.overflow} />

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

            </div>
        </div>
    );
}

export default Download;