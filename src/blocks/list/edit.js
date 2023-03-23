import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	ColorPalette,
	Dashicon,
} from "@wordpress/components";

const MY_TEMPLATE = [
	["core/list-item", { placeholder: "List Item" }],
];

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	console.log(attributes);
	return (
		<ul {...useBlockProps} style={{ "--my-css-var": attributes.dotColor }}>
			<InspectorControls style={{ marginBottom: "40px" }}>
				<PanelBody>
					<p>Bullet color:</p>
					<PanelRow>
						<ColorPalette
							colors={[
								{ name: 'Berry', color: '#C11F5A' },
								{ name: 'Navy', color: '#0C304F' },
								{ name: 'Aqua', color: '#1E8AA8' },
								{ name: 'Blue', color: '#005482' },
								{ name: 'Gray', color: '#5A5858' },
								{ name: 'Mint', color: '#13A59A' },
								{ name: 'Orange', color: '#DE5126' },
								{ name: 'Light blue', color: 'rgba(0,84,130,.06)' },
							]}
							value={ attributes.dotColor }
							onChange={(value) => setAttributes({ dotColor: value })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				template={MY_TEMPLATE}
				allowedBlocks={["core/list-item"]}
			/>
		</ul>
	);
}