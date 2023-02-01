
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';


export default function Edit() {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<h2>Third Block.</h2>
			<p>{ __('Here is the placeholder','itm-simple-block') }</p>
			<p>{ __('This block is rendered by a PHP callback','itm-simple-block') }</p>
			<p>{ __('Click  menu <Preview> and <Preview in new tab> to see the output','itm-simple-block') }</p>
				
		</div>
	);
}
