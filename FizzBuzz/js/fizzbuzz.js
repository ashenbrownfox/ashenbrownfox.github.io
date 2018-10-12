(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

$(document).ready(function () {
  var initial_count = $('#num').val();
  console.log("Inital Count:" +initial_count);
	var cur_num = randomInt(1, 1000),
		count = initial_count,
		misses = 0,
		clock,
		cur_time;

  function resetVariables(){
    count = initial_count;
  }

	function checkCurNum() {
		if (cur_num % 3 == 0 && cur_num % 5 == 0) {
			return 'fizzbuzz';
		} else if (cur_num % 3 == 0) {
			return 'fizz';
		} else if (cur_num % 5 == 0) {
			return 'buzz';
		} else {
			return "";
		}
	};

	function timer() {
		var start = new Date().getTime(),
			elapsed = 0;

		clock = setInterval(function () {
			var time = new Date().getTime() - start;

			elapsed = Math.floor(time / 1000);
			formatTime(elapsed);
		}, 500);
	};

	function formatTime(seconds) {
		var min = Math.floor(seconds / 60),
			sec = seconds % 60;

		if (sec < 10) {
			sec = '0' + sec;
		}
		if (min < 10) {
			min = '0' + min;
		}

		cur_time = min + ':' + sec;
		$('.timer').text('Time: ' + cur_time);
	};

	function updateStats() {
		$('.cur_num').text(cur_num);
		$('.misses').text('Misses: ' + misses);
		$('.count').text('Rounds Left: ' + count);
	};

	function updateEndCard() {
    var makes = (initial_count - misses);
    var percentage = (makes/initial_count * 100).toFixed(2) + '%';
		$('h2:nth-child(2)').text('Time: ' + cur_time);
		$('h2:nth-child(3)').text('Correct: ' + makes);
    $('h2:nth-child(4)').text('Incorrect: ' + misses);
		$('h2:nth-child(5)').text('Accuracy: ' + percentage);
	};

	$('.start_form').on('submit', function (e) {
		e.preventDefault();
    initial_count = $('#num').val();
    count = initial_count;
    console.log("Initial Count: "+initial_count)
		$('.title_card').hide();
		$('.text').focus();
		timer();
		updateStats();
	});


	$('.input_form').on('submit', function (e) {
		e.preventDefault();
		var input = $('.text').val().toLowerCase().trim();
		var	test = checkCurNum();

		$('.text').val('');

		if (test == input) {
			count--;
			if (count <= 0) {
				updateEndCard();
				$('.end').show();
				clearInterval(clock);
			} else {
				cur_num = randomInt(1, 1000);
				updateStats();
			}
		} else {
			misses++;
      count--;
      cur_num = randomInt(1,1000);
			updateStats();
		}
	});


	$('body').disableSelection();

});

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
