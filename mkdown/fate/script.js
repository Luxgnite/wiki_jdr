
    window.addEventListener("load", initialise);
  
    function initialise (evt)
    {
      var h4s = document.querySelectorAll("li");
      for (var i = 0 ; i < h4s.length ; i++)
      {
        var h4 = h4s[i];
        h4.style.margin="5px";
        h4.style.display="inline-block";
      }
      var skills = document.querySelectorAll(".skills li");
      for (var i=0; i < skills.length; i++)
      {
        var oneSkills = skills[i];
        oneSkills.style.margin="0px";
        oneSkills.addEventListener('click', displayElement);
        oneSkills.addEventListener('mouseenter', skillHover);
        oneSkills.addEventListener('mouseleave', skillNonHover);

      }

      var liners = document.querySelectorAll(".liner");
      for (var i=0; i < liners.length; i++)
      {
        var liner = liners[i];
        liner.style.width="0px";
        liner.style.height="2px";
        liner.style.backgroundColor = "#3399ff";

      }

      var descriptions = document.querySelectorAll(".skills li>p");
      for (var i=0; i < descriptions.length; i++)
      {
        var oneDescr = descriptions[i];
        oneDescr.classList.add("description");
        oneDescr.style.height="0";
        oneDescr.style.margin="0";
        oneDescr.style.opacity="0";

      }
    }
    function displayElement (evt)
    {
      console.log("lol");
      var skillDescriptions = this.children;
      for (var i = 1; i < skillDescriptions.length; i++)
      {
        console.log("boucle");
        var skillDescr = skillDescriptions[i];

        if (!(skillDescr.className=="description display") && skillDescr.className=="description")
        {
          console.log("visible");
          this.style.transition="height 5s linear";
          skillDescr.style.transition="0.5s opacity";
          skillDescr.style.opacity="1";
          skillDescr.style.height="auto";
          skillDescr.classList.add("display");
          this.style.paddingLeft = "15px";
          this.style.marginBottom = "15px";
        }
        else if (skillDescr.className=="description display")
        {
          console.log("invisible");
          skillDescr.style.transition="";
          skillDescr.classList.remove("display");
          skillDescr.style.height="0";
          skillDescr.style.opacity="0";
          this.style.paddingLeft = "0px";
          this.style.marginBottom = "0px";
        }
      }
    }

    
    function skillHover (evt)
    {
      console.log("hover");
      var children = this.children;
      var liner;
      for (var  i = 0 ; i < children.length ; i++)
      {
        liner = children[i];
        if (liner.className == "liner")
        {
          console.log("mitsuketa!");
          break;
        }
      }
      liner.style.transition="width 400ms ease";
      liner.style.width = window.getComputedStyle(this.children[0]).getPropertyValue("width");
      this.style.cursor="pointer";
    }

    function skillNonHover (evt)
    {
      var children = this.children;
      var liner;
      for (var  i = 0 ; i < children.length ; i++)
      {
        if (children[i].className == "liner")
        {
          console.log("mitsuketa!");
          liner = children[i];
          break;
        }
      }
      liner.style.transition="width 100ms linear";
      liner.style.width ="0px";
      this.style.cursor="default";
    }