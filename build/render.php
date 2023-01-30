<!--  -->
<p <?php echo get_block_wrapper_attributes(); ?>>

	
	<?php esc_html_e( 'Example Dynamic – hello from a dynamic block!', 'third-block' ); ?>
	<h2>This header is created in php</h2>
	<p>This is a paragraph created in a php file: <b>render.php</b></p>
	<p>Here output for the attibutes:</p>
	<?php foreach( $attributes as $attribute){
		echo '<span class="class_attributes">' . $attribute . '</span>';

	}
	?>
</p>
