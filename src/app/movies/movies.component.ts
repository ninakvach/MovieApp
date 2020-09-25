import { Component } from '@angular/core';
import { Movie } from '../movie';
import {MovieService} from '../movie.service';


@Component({
    selector:'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent{
    
    title = 'Movies List';
    movies : Movie[];
    selectedMovie: Movie;
    constructor(private movieService:MovieService){}
    ngOnInit(): void {
        this.getMovies();
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
    onSelect(movie:Movie):void{
        this.selectedMovie=movie;
    }
    getMovies():void{
        this.movieService.getMovies()
        .subscribe(movies=>{this.movies=movies;});
    }
    add(name:string,imageUrl:string,description:string):void{
        this.movieService.add(
            {
                name,
                imageUrl,
                description
            }as Movie
        ).subscribe(movie=>this.movies.push(movie));

    }
    delete(movie:Movie):void{
        var index = this.movies.indexOf(movie);
        this.movies=this.movies.splice(index, 1);  
       // this.movies=this.movies.filter(item => item.name !== name);
        this.movieService.delete(movie).subscribe();
    }
}