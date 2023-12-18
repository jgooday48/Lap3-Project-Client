
  export function resizeWidth(resizer, sidebar) {
    let x, w;

    function rs_mousedownHandler(e) {
      x = e.clientX;

      const sbWidth = window.getComputedStyle(sidebar).width;
      w = parseInt(sbWidth, 10);

      document.addEventListener('mousemove', rs_mousemoveHandler);
      document.addEventListener('mouseup', rs_mouseupHandler);
    }

    function rs_mousemoveHandler(e) {
      const dx = e.clientX - x;

      const cw = w + dx;
      if (cw < 700) {
        sidebar.style.width = `${cw}px`;
      }
    }

    function rs_mouseupHandler() {
      document.removeEventListener('mouseup', rs_mouseupHandler);
      document.removeEventListener('mousemove', rs_mousemoveHandler);
    }

    resizer.addEventListener('mousedown', rs_mousedownHandler);
  }