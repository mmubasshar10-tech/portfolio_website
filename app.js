var Typed =  new Typed(".text", {
    strings:["Frontoned Developer","Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener("DOMContentLoaded", () => {
  // ==== knobs (image ke mutabiq gap/size) ====
  const ROW_GAP   = "60px";   // rows ke darmiyan
  const ICON_GAP  = "15px";   // icon ↔ label/bar
  const LABEL_W   = "100px";  // label (HTML/CSS/...) ki fixed width
  const BAR_H     = "8px";    // bar height
  const BAR_COLOR = "#00eaff";
  const PERCENTS  = { html: 90, css: 60, JavaScript: 85, Github: 65, React: 75 };
  // ===========================================

  // container
  const container =
    document.querySelector(".Technical-bars") ||
    document.querySelector(".Technical-bars") ||
    document.querySelector("#Technical-bars");

  if (container) {
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.rowGap = ROW_GAP;           // vertical space between rows
    container.style.alignItems = "flex-start";
    container.style.width = "100%";
  }

  // each row: icon + label + bar on one line
  document.querySelectorAll(".Technical-bars .bar, .Technical-bars .bar").forEach(bar => {
    bar.style.display = "flex";
    bar.style.alignItems = "center";
    bar.style.columnGap = ICON_GAP;
    bar.style.width = "100%";
  });

  // icon size consistent
  document.querySelectorAll(".Technical-bars .bar i, .Technical-bars .bar i").forEach(icon => {
    icon.style.minWidth = "26px";
    icon.style.fontSize = "26px";
    icon.style.lineHeight = "1";
  });

  // label width + right gap (exactly jaisa screenshot me columns aligned)
  document.querySelectorAll(".Technical-bars .bar .info, .Technical-bars .bar .info").forEach(info => {
    info.style.minWidth = LABEL_W;    // same width sab labels ki
    info.style.marginRight = ICON_GAP;
    info.style.whiteSpace = "nowrap";
  });

  // track + animated fill
  document.querySelectorAll(".Technical-bars .progress-line, .Technical-bars .progress-line").forEach(track => {
    // track (grey line)
    track.style.position = "relative";
    track.style.flex = "1";
    track.style.height = BAR_H;
    track.style.borderRadius = "10px";
    track.style.background = "rgba(255,255,255,0.15)";
    track.style.overflow = "hidden";

    // fill span (create if missing)
    let fill = track.querySelector("span");
    if (!fill) {
      fill = document.createElement("span");
      track.appendChild(fill);
    }
    fill.style.position = "absolute";
    fill.style.left = "0";
    fill.style.top = "0";
    fill.style.bottom = "0";
    fill.style.width = "0%";
    fill.style.background = BAR_COLOR;
    fill.style.borderRadius = "10px";
    fill.style.transition = "width 1.6s ease";

    // percentage: match by class name OR data-progress
    const key = [...track.classList].find(c => PERCENTS[c] != null);
    const pct = key ? PERCENTS[key] :
      (track.dataset.progress || track.getAttribute("data-progress") || 0);

    // animate
    requestAnimationFrame(() => (fill.style.width = pct + "%"));
  });
});



  // Get all radial bars
  const radialBars = document.querySelectorAll(".radial-bars");

  radialBars.forEach((bar) => {
    const circle = bar.querySelector(".path");
    const percent = bar.querySelector(".percentage").textContent;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // Set stroke properties
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    // Animate stroke based on percentage
    setTimeout(() => {
      const progress = (percent.replace('%', '') / 100) * circumference;
      circle.style.transition = "stroke-dashoffset 1.5s ease";
      circle.style.strokeDashoffset = circumference - progress;
    }, 200);
  });

  
