class sevenSegment{
    constructor(pos,defaultNum){
        this.nums =  [0x7E,0x30,0x6D,0x79,0x33,0x5B,0x5F,0x70,0x7F,0x7B];
        this.pos = pos;
        this.index = defaultNum;
    }


getColor(val,shift)
{
    let r = 255
    let g = 0
    let b = 0
    let a = 255*((val>>shift)&1)
    return color(r,g,b,a)
}



show(val)
{
    val = this.nums[val];
    push();
    stroke(0);
    colorMode(RGB,1);
    noFill();
    //A
    fill(this.getColor(val,6))
    rect(this.pos.x + 60,this.pos.y + 20,78,18);
    //B
    fill(this.getColor(val,5))
    rect(this.pos.x + 140,this.pos.y + 40,18,98);
    //C
    fill(this.getColor(val,4))
    rect(this.pos.x +140,this.pos.y + 160,18,98);
    //D
    fill(this.getColor(val,3))
    rect(this.pos.x + 60,this.pos.y + 260,78,18);
    //E
    fill(this.getColor(val,2))
    rect(this.pos.x + 40,this.pos.y + 160,18,98);
    //F
    fill(this.getColor(val,1))
    rect(this.pos.x + 40,this.pos.y + 40,18,98);
    //G
    fill(this.getColor(val,0))
    rect(this.pos.x + 60,this.pos.y + 140,78,18);
    pop();
}





}