new Vue({
  el: '#app',
  data: {
    favorites: [
      {name: 'vue', class: 1, color: '#badc58'},
      {name: 'css', class: 2, color: '#ffbe76'},
      {name: 'html', class: 3, color: '#7ed6df'},
      {name: 'javascript', class: 4, color: '#f6e58d'},
      {name: 'podcast', class: 5, color: '#e056fd'},
    ],
  },
  mounted() {
    setInterval(() => {
      this.favorites.forEach(fav => {
        if(fav.class === this.favorites.length) {
          fav.class = 0;
        }
        fav.class++;
      });
    }, 1000);
  },
})

/** ==============================================
 * THIS WILL ALSO WORK:
 * You can create a method
 * And call it with the "created" lifecyle hook
 * ==============================================

  created() {
    this.rotateFavs()
  },
  methods: {
    rotateFavs() {
      setInterval(() => {
        this.favorites.forEach(fav => {
          if(fav.class === this.favorites.length) {
            fav.class = 0;
          }
          fav.class++;
        });
      }, 1000);
    }
  }
*/
