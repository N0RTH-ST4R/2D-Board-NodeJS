this.tiles={
    "ground":".",
    "wall":"#"
}
this.width=null
this.board=[]

this.createBoard=function(w){
    if(this.width==null){
        throw("Width value not set. Set 2dboard.width value to an integer")
    }
    var width=Math.floor(w)
    for(let i=0;i<x;i++){
        this.board.push([])
        var row=this.board[i]
        if(i==0 || i==x-1){
            for(let i=0;i<x;i++){
                row.push(tiles.wall)
            }
        }else{
            row.push(tiles.wall)
            for(let i=0;i<x-2;i++){
                row.push(tiles.ground)
            }
            row.push(tiles.wall)
        }
    }
}

this.placeTile=function(tile,x,y){
    board[y][x]=tile

this.logBoard=function(){
    for(let i=0;i<board.length;i++){
        console.log(this.board[i].join(" "))
    }
}

