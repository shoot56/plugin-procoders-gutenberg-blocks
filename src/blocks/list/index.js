import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

import edit from "./edit";
import save from './save';
import metadata from './block.json';

registerBlockType( 'procoders-block/list', {
	title: __( 'List with options', 'procoders-blocks' ),
	description: __( 'Create a bullet list with options.', 'procoders-blocks' ),
	category: 'common',
	icon: {
		src: <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M4 4h16v2H4zM4 18h16v2H4zM9 8h11v3H9zM9 13h11v3H9z"/><circle cx="5.5" cy="9.5" r="1.5" fill="#C11F5A"/><circle cx="5.5" cy="14.5" r="1.5" fill="#C11F5A"/></svg>
	},
	attributes: {
		dotColor: {
			type: "string",
			default: "#C11F5A",
		},
	},
	supports: {
		html: false,
		color: true,
		spacing: {
			margin: true,
			padding: true,
			blockGap: false,
		},
		typography: {
			fontSize: true,
			lineHeight: true,
		},
	},
	edit,
	save,
} );

