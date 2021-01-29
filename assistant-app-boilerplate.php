<?php
/*
 * Plugin Name: Assistant App Boilerplate
 * Author: Brent Jett
 * Author URI: https://brentjett.design
 * Version: 0.0.1
 * Description: A boilerplate plugin for registering a custom Assistant app.
 * License: GNU General Public License v2.0
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

defined( 'ABSPATH' ) || die();

define( 'MY_ASST_APP_VERSION', '0.0.1' );
define( 'MY_ASST_APP_FILE', trailingslashit( __FILE__ ) );
define( 'MY_ASST_APP_DIR', plugin_dir_path( MY_ASST_APP_FILE ) );
define( 'MY_ASST_APP_URL', plugins_url( '/', MY_ASST_APP_FILE ) );

function my_asst_app_init() {
    /**
     * Assistant will trigger a custom enqueue action once the base libraries
     * are available.
     */
    add_action( 'fl_assistant_enqueue', 'my_asst_app_enqueue' );
}

function my_asst_app_enqueue() {
    wp_enqueue_script(
        'assistant-app-boilerplate',
        MY_ASST_APP_URL . 'build/main.js',
        
        [ 'fl-assistant' ], /* main assistant API bundle */
        MY_ASST_APP_VERSION,
        true
    );
}

my_asst_app_init();