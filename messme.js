//chars.js
const BASIC_CHARS = "abcdefghijklmñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
const SPECIAL_CHARS = "áéíóúÁÉÍÓÚ";
const SYMBOL_CHARS = "¿?¡!()[]{}-_.,;:@#$%&/=+*";
const SINGLE_BOX_CHARS = "┌┐└┘─│";
const DOUBLE_BOX_CHARS = "╔╗╚╝═║";
const ROUND_BOX_CHARS = "╭╮╰╯─│";
const MUSIC_CHARS = "♩♪♫♬♭♮♯";
const CHESS_CHARS = "♔♕♖♗♘♙♚♛♜♝♞♟";
const CARDS_CHARS = "♠♣♥♦♤♧♡♢";
const BLOCKS_CHARS = "█▓▒░";
const ROUND_CHARS = '○◌◍◎●◐◑◒◓◔◕'
const ARROW_CHARS = '←↑→↓↔↕↖↗↘↙'
const MATH_CHARS = '±×÷√∞∫≈≠≡≤≥'
const GREEK_CHARS = 'αβγδεζηθικλμνξοπρστυφχψω';
const DICE_CHARS = '⚀⚁⚂⚃⚄⚅'

const ascii_chars = {
    basic: BASIC_CHARS,
    special: SPECIAL_CHARS,
    symbol: SYMBOL_CHARS,
    single_box: SINGLE_BOX_CHARS,
    double_box: DOUBLE_BOX_CHARS,
    round_box: ROUND_BOX_CHARS,
    music: MUSIC_CHARS,
    chess: CHESS_CHARS,
    cards: CARDS_CHARS,
    blocks: BLOCKS_CHARS,
    round: ROUND_CHARS,
    arrow: ARROW_CHARS,
    math: MATH_CHARS,
    greek: GREEK_CHARS,
    dice: DICE_CHARS,
}

function createSet(...sets) {
    return sets.join('').split('');
}


const CHARACTERS = createSet(ascii_chars.basic, ascii_chars.special, ascii_chars.symbol, ascii_chars.block,ascii_chars.greek, ascii_chars.math);

//random.js
const randomMethods = {
    getRandomElement: function(array){
        return array[Math.floor(Math.random() * array.length)];
    },
    getRandomCharacter: function(){
        return this.getRandomElement(CHARACTERS);
    }
}

// Repeater.js
class Repeater{
    constructor(goal, delay, autoreset, repeat_action, callback){
        this.goal = goal;
        this.delay = delay;
        this.repeat_action = repeat_action;
        this.callback = callback;
        this.current = 0;
        this.interval = null;
        this.autoreset = autoreset;
        this.finished = false;
    }
    stop(){
        this.reset();
        clearInterval(this.interval);
    }
    start(){
        this.interval = setInterval(this.update.bind(this), this.delay);
    }
    reset(){
        this.current = 0;
        this.finished = false;
    }
    
    update(){
        this.repeat_action();
        this.current += 1;
        if(this.current >= this.goal){
            clearInterval(this.interval);
            if(this.autoreset){
                this.reset();
                this.start();
            }
            else{
                this.finished = true;
                if(this.callback){
                this.callback();
                }
            }
        }
    }
}

class Manipulator{
    constructor(dynamicText){
        this.dynamicText = dynamicText
        this.repeater = null;
        this.createRepeater();
    }

    createRepeater(){
        const goal = this.dynamicText.split_text.length;
        const step = 1
        const speed = this.dynamicText.mess_speed;
        const play_mode = this.dynamicText.play_mode;
        const autoreset = this.dynamicText.autoreset;
        if(play_mode == "loop"){
            this.repeater = new Repeater(goal, step, speed, autoreset, this.mess.bind(this), this.dynamicText.fix.bind(this.dynamicText));
        }
        else if (play_mode == "manual"){
            this.repeater = new Repeater(goal, step, speed, autoreset, this.mess.bind(this));
        }
    }
    idle(){
        return;
    }
    mess(){
        const index = this.repeater.current;
        if(this.filter(index)){
            return;
        }
        const randomCharacter = this.getRandomCharacter(); // obten un caracter aleatorio
        this.dynamicText.split_text[index] = randomCharacter; //asigna el caracter aleatorio a la posicion actual
        this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }

    fix(){
        const index = this.repeater.current;
        if(this.filter(index)){
            return;
        }
        this.dynamicText.split_text[index] = this.dynamicText.text[index];
        this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }

    getRandomCharacter(){
        return this.dynamicText.characters[Math.floor(Math.random() * this.dynamicText.characters.length)];
    }

    stop(){
        this.repeater.stop();
    }

    start(){
        this.repeater.start();
    }

    filter(index){
        return this.dynamicText.ignoredCharacters.includes(this.dynamicText.split_text[index])        
    }
}

//Messer.js

class Messer extends Manipulator{
    constructor(dynamicText){
        super(dynamicText);
    }
    createRepeater(){
        const goal = this.dynamicText.split_text.length;
        const step = 1
        const delay = this.dynamicText.mess_delay;
        const play_mode = this.dynamicText.play_mode; // oneShot, loop or mouseover
        const autoreset = this.dynamicText.autoreset;
        if(play_mode == "loop"){
            this.repeater = new Repeater(goal, delay, autoreset, this.mess.bind(this), this.dynamicText.fix.bind(this.dynamicText));
        }
        else if (play_mode == "oneshot"){
            this.repeater = new Repeater(goal, delay, false, this.mess.bind(this));
        }
        else if (play_mode == "mouseover"){
            this.repeater = new Repeater(goal, delay, false, this.mess.bind(this));
            this.dynamicText.element.addEventListener("mouseover", () => {
                this.repeater.start();
            });
            this.dynamicText.element.addEventListener("mouseout", () => {
                this.repeater.stop();
            });
        }
    }
    mess(){
        const index = this.repeater.current;
        if(this.filter(index)){
            return;
        }
        const randomCharacter = this.getRandomCharacter(); // obten un caracter aleatorio
        this.dynamicText.split_text[index] = randomCharacter; //asigna el caracter aleatorio a la posicion actual
        this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
}

//Fixer.js

class Fixer extends Manipulator{
    constructor(dynamicText){
        super(dynamicText);
    }
    createRepeater(){
        const goal = this.dynamicText.split_text.length;
        const step = 1
        const delay = this.dynamicText.mess_delay;
        const play_mode = this.dynamicText.play_mode;
        if(play_mode == "loop"){
            this.repeater = new Repeater(goal, delay, false, this.fix.bind(this), this.dynamicText.idle.bind(this.dynamicText));
        }
        else if (play_mode == "oneshot"){
            this.repeater = new Repeater(goal, delay, false, this.fix.bind(this));
        }
        else if (play_mode == "mouseover"){
            this.repeater = new Repeater(goal, delay, false, this.fix.bind(this));
            this.dynamicText.element.addEventListener("mouseout", () => {
                this.repeater.start();
            });
            this.dynamicText.element.addEventListener("mouseover", () => {
                this.repeater.stop();
            });
        }
    }
    
    fix(){
        const index = this.repeater.current;
        this.dynamicText.split_text[index] = this.dynamicText.text[index];
        this.dynamicText.element.innerHTML = this.dynamicText.split_text.join('');
    }
}

//string mess

class DynamicText{
    constructor(element, play_mode="loop", autoreset=false){
        this.element = element;
        this.text = element.innerHTML;
        this.split_text = this.text.split('');
        this.ignoredCharacters = " ,.¿?!¡()".split('');
        this.mess_delay = 100;
        this.fix_delay = 100;
        this.idle_time = 2000;
        this.autoreset = autoreset;
        this.play_mode = play_mode // oneshot, loop or mouseover
        this.messer = new Messer(this);
        this.fixer = new Fixer(this);
        this.characters = CHARACTERS;
    }
    idle(){
        this.messer.stop();
        this.fixer.stop();
        setTimeout(this.mess.bind(this), this.idle_time);
    }
    fix(){
        this.messer.stop();
        this.fixer.start();
    }
    mess(){
        this.fixer.stop();
        this.messer.start();
    }

    set_ignored_characters(array){
        this.ignoredCharacters = array;
    }
    set_mess_delay(delay){
        this.mess_delay = delay;
        this.messer.repeater.delay = delay;
    }
    set_fix_delay(delay){
        this.fix_delay = delay;
        this.fixer.repeater.delay = delay;
    }
    set_idle_time(time){
        this.idle_time = time;
    }
    set_playmode(mode){
        this.messer.createRepeater();
        this.fixer.createRepeater();
        this.play_mode = mode;
    }
}

class MessManager{
    constructor(selector, play_mode="loop", autoreset=false){
        this.elements = document.querySelectorAll(selector);
        this.dynamicTexts = [];
        this.elements.forEach(element => {
            this.dynamicTexts.push(new DynamicText(element, play_mode, autoreset));
            console.log(element.innerHTML);
        });
    }

    idle(){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.idle();
        });
    }

    fix(){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.fix();
        });
    }

    mess(){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.mess();
        });
    }

    setCharacters(array){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.characters = array;
        });
    }

    setMessDelay(delay){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.set_mess_delay(delay);
        });
    }

    setFixDelay(delay){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.set_fix_delay(delay);
        });
    }

    setIdleTime(time){
        this.dynamicTexts.forEach(dynamicText => {
            dynamicText.set_idle_time(time);
        });
    }
    
}
