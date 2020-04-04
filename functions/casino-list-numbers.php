function casino_list_numbers($atts, $content=null){
static $count = 0;
$count++;
return '<span class="casino-list-number">' . $count . '</span>';
}

add_shortcode('casino_number', 'casino_list_numbers');