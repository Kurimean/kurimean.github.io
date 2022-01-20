/**
 * Created by Kay on 2016/3/7.
 */

// --------------------------------------------------------------------------------------------------------------------
/* 显示数字的动画：
 * 在 x=i,y=j 的位置上 显示数字 该数字的值 = randNumber
 * 在这个显示过程中 设置了一个50毫秒的动画效果
 */
function showNumberWithAnimation(i, j, randNumber) {
    var numberCell = $('#number-cell-' + i + "-" + j);

    numberCell.css('background-color', getNumberBackgroundColor(randNumber));
    numberCell.css('color', getNumberColor(randNumber));
    numberCell.text("");
	if(randNumber==2){
                 numberCell.css('background-image','url("assets/2.png")');
	}
	else if(randNumber==4){
                 numberCell.css('background-image','url("assets/4.png")');
	}
	else if(randNumber==8){
                 numberCell.css('background-image','url("assets/8.png")');
	}
	else if(randNumber==16){
                 numberCell.css('background-image','url("assets/16.png")');
	}
	else if(randNumber==32){
                 numberCell.css('background-image','url("assets/32.png")');
	}
	else if(randNumber==64){
                 numberCell.css('background-image','url("assets/64.png")');
	}
	else if(randNumber==128){
                 numberCell.css('background-image','url("assets/128.png")');
	}
	else if(randNumber==256){
                 numberCell.css('background-image','url("assets/256.png")');
	}
	else if(randNumber==512){
                 numberCell.css('background-image','url("assets/512.png")');
	}
	else if(randNumber==1024){
                 numberCell.css('background-image','url("assets/1024.png")');
	}
	else if(randNumber==2048){
                 numberCell.css('background-image','url("assets/2048.png")');
	}
	else{
                 numberCell.css('background-image','url("assets/4096.png")');
	}
    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getPosition(i),
        left: getPosition(j)
    }, 50);
}

// --------------------------------------------------------------------------------------------------------------------
/* 移动数字的动画：
 * 从 x=fromx,y=fromy 的位置 移动到  x=tox,y=toy 的位置
 * 在这个显示过程中 设置了一个200毫秒的动画效果
 */
function  showMoveAnimation(fromx, fromy, tox, toy){
    var numberCell = $('#number-cell-' + fromx + '-' +fromy );
    numberCell.animate({
        top:getPosition( tox ),
        left:getPosition( toy )
    },200);
}

function  updateScore(score){
    $('#score').text(score);
}