class Bus {
    constructor(direction, stations, seats,passengers){
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.index_of_current_station = 0;
    };

    current(){
       return this.stations[this.index_of_current_station];
        }

    next(){
        this.index_of_current_station++;
    };
    board(count){
        this.passengers += count;
        if(this.seats < this.passengers){
            this.passengers = this.seats;
        }
    };
    unBoard(count){
        this.passengers -= count;
        if(count > this.passengers){
            this.passengers = 0;
        }
    };
};
