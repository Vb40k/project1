let numbersOfFilms;
function start(){
numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
while(numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)){
numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
}
} 

start();

const personalMovieDB = {
       count: numbersOfFilms,
       movies: {},
       actors:{},
       genres:[],
       privat: false

};
          function detectPersonalLvl(){
       if(personalMovieDB.count < 10  ){
              alert('Просмотренно довольно мало фильмов');
              
       }else if(personalMovieDB.count>= 10, personalMovieDB.count < 30 ){
              alert('Вы классический зритель');
              
       } else if(personalMovieDB.count>= 30){
              alert('Вы киноман');
              
       }     else       {
              alert('Произошла ошибка');
               
       }
          }
          detectPersonalLvl();

       for( i = 0; i < 2; i++ ){
              const  a = prompt('Один из просмотренных фильмов?', ''),
                     b = +prompt('На сколько оцените его?', '');
                     if(a != null && b != null && a.length != 0 && b.length != 0 && a.length < 50 ){
                            personalMovieDB.movies[a] = b;
                             console.log('done'); 
                      } else {
                            
                             console.log('eror');
                             i--;
                      }
       personalMovieDB[a] = b;

       }
              function showMyDB(){
                     if(personalMovieDB.privat ===  false){
                            console.log(personalMovieDB);
                     }
                     return personalMovieDB;
              }
  showMyDB();
  function writeYourGenres(){
       for( i= 1; i< 4; i++){
           genreData = prompt(`Ваш любимый жанр под номером ${i} `)
           if (genreData =='' || genreData == null || typeof(genreData) === 'number'){
              alert('Попробуй еще раз');
              i--;
           }else{
              personalMovieDB.genres.push(genreData);
              // // или вариант:
              // personalMovieDB.genres[i -1] =genreData
           }
           

       }
       return personalMovieDB.genres;
  }
  writeYourGenres();

              









