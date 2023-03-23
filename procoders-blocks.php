<?php
/**
 * Plugin Name:       Procoders Blocks
 * Description:       Custom Gutenberg blocks from ProCoders.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.1
 * Author:            Procoders
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       procoders-blocks
 * GitHub Plugin URI: shoot56/plugin-procoders-gutenberg-blocks
 * Primary Branch: main
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_procoders_blocks_block_init() {
	$blocks = glob( dirname(__FILE__) . '/build/blocks/*');
	foreach ($blocks as $block){
		if ( is_dir( $block ) ) {
			register_block_type( $block );
		}
	}
}
add_action( 'init', 'create_block_procoders_blocks_block_init' );


// register new Gutenberg blocks category
function add_procoders_block_categories( $categories, $post ) {
	$custom_category_one = array(
		'slug' => 'procoders',
		'title' => __( 'Procoders Blocks', 'my-plugin' ),
		'icon'  => 'admin-customizer',
	);
	array_unshift( $categories, $custom_category_one);
	return $categories;
}
add_filter( 'block_categories_all', 'add_procoders_block_categories', 10, 2 );