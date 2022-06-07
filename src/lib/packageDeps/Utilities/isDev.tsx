import React from 'react';

export default function isDev() {
	return '_self' in React.createElement('div');
}
