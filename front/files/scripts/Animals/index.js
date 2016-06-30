$(document).ready(function() {
	$('[data-class="filter"]').fancySelect().on('change.fs', function() {
		var filters = [];
		$('[data-class="filter"]').each(function(key) {
			var filter = {
				type: '',
				value: ''
			};
			filter.type = $(this).attr('data-id');
			filter.value = $(this).find('option:selected').val();
			filters[key] = filter;
		});
		console.log(filters);

		$.ajax({
			type: 'POST',
			url: home + '/animals/animalFilter',
			data: {data: filters},
			error: function() {
				$('.loader').hide();
			},
			beforeSend: function() {
				$('.loader').show();
			},
			success: function(retorno) {
				$('[data-id="div-starhorse"]').html(retorno);
				$('.loader').hide();
			}
		});
	});
});
