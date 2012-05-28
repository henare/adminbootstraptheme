(function() {
  jQuery(function() {
    $('.locales a:first').tab('show');
    $('.accordion-body').on('hidden', function() {
      return $(this).prev().find('i').first().removeClass().addClass('icon-chevron-right');
    });
    $('.accordion-body').on('shown', function() {
      return $(this).prev().find('i').first().removeClass().addClass('icon-chevron-down');
    });
    $('.toggle-hidden').live('click', function() {
      $(this).parents('td').find('div:hidden').show();
      return false;
    });
    return $('#request_hidden_user_explanation_reasons input').live('click', function() {
      var info_request_id, reason;
      $('#request_hidden_user_explanation').show();
      info_request_id = $('#hide_request_form').attr('info_request_id');
      reason = $(this).val();
      $('#request_hidden_user_explanation_field').attr("value", "[loading default text...]");
      return $.ajax("/hidden_user_explanation?reason=" + reason + "&info_request_id=" + info_request_id, {
        type: "GET",
        dataType: "text",
        error: function(data, textStatus, jqXHR) {
          return $('#request_hidden_user_explanation_field').attr("value", "Error: " + textStatus);
        },
        success: function(data, textStatus, jqXHR) {
          return $('#request_hidden_user_explanation_field').attr("value", data);
        }
      });
    });
  });
}).call(this);
