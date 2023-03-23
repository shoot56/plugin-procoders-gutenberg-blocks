import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ props, attributes }) {
	return (
		<ul {...useBlockProps} style={{ "--my-css-var": attributes.dotColor }}>
			<InnerBlocks.Content />
		</ul>
	);
}