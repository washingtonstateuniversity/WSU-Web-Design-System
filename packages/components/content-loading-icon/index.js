import React from 'react';

import { WsuHeading } from '../../components';
import './style.scss';

const ContentLoadingIcon = () => {

	return (
		<>
		{/* // Bouncing */}
		<div className="wsu-c-loading-icon--1">
			<svg width="100" height="100" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<path class="wsu-c-butch__chest" d="M247.554 402.595C247.554 402.595 268.092 393.841 279.311 359.847C285.308 372.98 287.819 387.44 286.601 401.828C277.565 403.896 247.554 402.595 247.554 402.595Z"/>
				<path class="wsu-c-butch__jaw" d="M333.389 334.281C273.382 342.563 263.082 216.707 263.082 216.707C263.082 216.707 283.26 281.138 326.046 278.859C370.379 276.56 357.803 208.206 357.803 208.206C357.803 208.206 400.917 324.976 333.389 334.281Z"/>
				<path class="wsu-c-butch__hair" d="M57.6336 305.556C38.6919 311.176 19.4506 315.729 -3.05176e-05 319.195C-3.05176e-05 319.195 34.2603 293.248 59.833 213.115L84.458 235.414L79.8771 250.731C79.8771 250.731 91.6228 267.507 94.551 278.912C99.2049 268.731 101.478 257.621 101.197 246.428C100.916 235.235 98.0893 224.254 92.9309 214.32L89.7516 223.644L80.1041 214.891L63.5509 199.724C70.6621 178.748 81.0799 159.045 94.4092 141.363L96.6367 143.836L115.62 165.924L109.861 175.524C118.722 185.073 126.796 195.325 134.004 206.179C137.356 186.775 136.581 166.881 131.727 147.797L123.133 155.833L102.02 131.349C131.991 101.466 161.055 83.3269 195.667 71.679C193.5 74.0292 191.499 76.5287 189.681 79.1591C177.883 95.7815 165.988 125.803 175.607 174.247C177.085 181.817 179.608 192.491 182.217 203.843C187.405 225.971 193.152 251.047 195.177 266.838C199.284 299.742 195.987 321.295 185.007 332.683C177.344 340.658 164.991 344.185 147.786 343.557C147.892 340.796 147.985 338.213 147.985 335.655C148.031 321.651 146.384 307.694 143.08 294.087L138.819 278.145L131.715 293.016C120.468 316.507 82.1251 374.888 32.1259 386.321C32.1259 386.321 32.049 386.321 32.049 386.361C47.3281 362.054 56.1359 334.236 57.6336 305.556V305.556Z"/>
				<path class="wsu-c-butch__face" d="M204.428 400.64C203.512 400.64 202.577 400.64 201.645 400.608C201.469 400.614 201.293 400.603 201.119 400.576C200.515 400.576 199.904 400.543 199.329 400.515C196.672 400.308 194.509 400.081 192.528 399.809C188.336 399.234 183.213 398.455 177.284 397.551C140.125 391.359 102.614 387.51 64.9726 386.025C100.574 365.166 125.279 328.491 134.23 313.693C135.189 321.032 135.674 328.424 135.684 335.825C135.684 340.617 135.514 344.858 135.158 348.799L134.635 354.913L140.739 355.464C144.53 355.792 148.195 355.955 151.638 355.955C170.504 355.955 184.315 351.134 193.861 341.217C207.757 326.788 212.046 302.666 207.36 265.302C205.307 248.728 199.13 222.298 194.165 201.058C191.471 189.345 189.122 179.06 187.628 171.843C178.879 127.652 189.361 100.874 199.697 86.177C207.444 75.0545 218.482 66.6456 231.256 62.1354C231.501 62.1345 231.746 62.106 231.985 62.0502L252.07 0H258.428L244.856 59.5974C249.012 58.9163 251.883 58.4622 254.447 58.073L271.879 3.0569H278.169L266.792 56.354C283.398 54.2215 302.235 52.3889 326.107 50.5767C330.71 53.1745 334.426 57.0989 336.771 61.8394L393.675 44.2359L395.761 50.3659L341.359 71.5412C341.826 72.6797 342.231 73.8422 342.575 75.0238L402.112 67.568L403.092 73.9819L345.365 85.5121C345.572 86.6757 345.77 87.819 345.916 88.7839L406.004 90.7056L405.907 97.1924L346.718 99.7344C346.838 106.752 345.788 113.74 343.611 120.411C349.034 144.303 345.353 157.629 345.312 157.763C335.499 134.921 327.897 128.317 327.832 128.252C319.741 124.472 310.947 122.436 302.02 122.276C295.004 122.315 288.077 123.854 281.703 126.791C275.329 129.728 269.655 133.994 265.063 139.304C251.827 154.35 245.066 174.023 246.254 194.036C247.517 207.942 250.547 223.713 254.382 243.684C258.38 264.503 263.357 290.41 267.598 321.789C270.806 345.304 267.29 364.148 257.145 377.831C247.852 389.749 234.271 397.556 219.304 399.582L218.729 399.671C218.263 399.744 217.813 399.817 217.356 399.854C217.204 399.914 217.041 399.939 216.878 399.927C212.748 400.436 208.589 400.675 204.428 400.64V400.64ZM265.05 102.321C250.875 102.321 236.886 105.35 230.247 109.858C225.978 112.811 222.399 116.655 219.756 121.125C217.113 125.595 215.47 130.585 214.938 135.752C214.381 139.193 214.432 142.704 215.088 146.127C219.861 137.384 226.466 129.777 234.451 123.829C248.138 114.999 264.065 110.279 280.348 110.227C282.179 110.227 283.993 110.296 285.775 110.43C286.35 110.478 286.917 110.502 287.468 110.502C289.995 110.502 291.684 110 291.883 109.197C292.045 108.536 291.202 107.705 289.453 106.793C281.763 103.468 273.418 101.939 265.05 102.321V102.321Z"/>
			</svg>
		</div>

		{/* // Outlines that fill in */}
		<div className="wsu-c-loading-icon--2">
			<svg width="100" height="100" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<path class="wsu-c-butch__chest" d="M247.554 402.595C247.554 402.595 268.092 393.841 279.311 359.847C285.308 372.98 287.819 387.44 286.601 401.828C277.565 403.896 247.554 402.595 247.554 402.595Z"/>
				<path class="wsu-c-butch__jaw" d="M333.389 334.281C273.382 342.563 263.082 216.707 263.082 216.707C263.082 216.707 283.26 281.138 326.046 278.859C370.379 276.56 357.803 208.206 357.803 208.206C357.803 208.206 400.917 324.976 333.389 334.281Z"/>
				<path class="wsu-c-butch__hair" d="M57.6336 305.556C38.6919 311.176 19.4506 315.729 -3.05176e-05 319.195C-3.05176e-05 319.195 34.2603 293.248 59.833 213.115L84.458 235.414L79.8771 250.731C79.8771 250.731 91.6228 267.507 94.551 278.912C99.2049 268.731 101.478 257.621 101.197 246.428C100.916 235.235 98.0893 224.254 92.9309 214.32L89.7516 223.644L80.1041 214.891L63.5509 199.724C70.6621 178.748 81.0799 159.045 94.4092 141.363L96.6367 143.836L115.62 165.924L109.861 175.524C118.722 185.073 126.796 195.325 134.004 206.179C137.356 186.775 136.581 166.881 131.727 147.797L123.133 155.833L102.02 131.349C131.991 101.466 161.055 83.3269 195.667 71.679C193.5 74.0292 191.499 76.5287 189.681 79.1591C177.883 95.7815 165.988 125.803 175.607 174.247C177.085 181.817 179.608 192.491 182.217 203.843C187.405 225.971 193.152 251.047 195.177 266.838C199.284 299.742 195.987 321.295 185.007 332.683C177.344 340.658 164.991 344.185 147.786 343.557C147.892 340.796 147.985 338.213 147.985 335.655C148.031 321.651 146.384 307.694 143.08 294.087L138.819 278.145L131.715 293.016C120.468 316.507 82.1251 374.888 32.1259 386.321C32.1259 386.321 32.049 386.321 32.049 386.361C47.3281 362.054 56.1359 334.236 57.6336 305.556V305.556Z"/>
				<path class="wsu-c-butch__face" d="M204.428 400.64C203.512 400.64 202.577 400.64 201.645 400.608C201.469 400.614 201.293 400.603 201.119 400.576C200.515 400.576 199.904 400.543 199.329 400.515C196.672 400.308 194.509 400.081 192.528 399.809C188.336 399.234 183.213 398.455 177.284 397.551C140.125 391.359 102.614 387.51 64.9726 386.025C100.574 365.166 125.279 328.491 134.23 313.693C135.189 321.032 135.674 328.424 135.684 335.825C135.684 340.617 135.514 344.858 135.158 348.799L134.635 354.913L140.739 355.464C144.53 355.792 148.195 355.955 151.638 355.955C170.504 355.955 184.315 351.134 193.861 341.217C207.757 326.788 212.046 302.666 207.36 265.302C205.307 248.728 199.13 222.298 194.165 201.058C191.471 189.345 189.122 179.06 187.628 171.843C178.879 127.652 189.361 100.874 199.697 86.177C207.444 75.0545 218.482 66.6456 231.256 62.1354C231.501 62.1345 231.746 62.106 231.985 62.0502L252.07 0H258.428L244.856 59.5974C249.012 58.9163 251.883 58.4622 254.447 58.073L271.879 3.0569H278.169L266.792 56.354C283.398 54.2215 302.235 52.3889 326.107 50.5767C330.71 53.1745 334.426 57.0989 336.771 61.8394L393.675 44.2359L395.761 50.3659L341.359 71.5412C341.826 72.6797 342.231 73.8422 342.575 75.0238L402.112 67.568L403.092 73.9819L345.365 85.5121C345.572 86.6757 345.77 87.819 345.916 88.7839L406.004 90.7056L405.907 97.1924L346.718 99.7344C346.838 106.752 345.788 113.74 343.611 120.411C349.034 144.303 345.353 157.629 345.312 157.763C335.499 134.921 327.897 128.317 327.832 128.252C319.741 124.472 310.947 122.436 302.02 122.276C295.004 122.315 288.077 123.854 281.703 126.791C275.329 129.728 269.655 133.994 265.063 139.304C251.827 154.35 245.066 174.023 246.254 194.036C247.517 207.942 250.547 223.713 254.382 243.684C258.38 264.503 263.357 290.41 267.598 321.789C270.806 345.304 267.29 364.148 257.145 377.831C247.852 389.749 234.271 397.556 219.304 399.582L218.729 399.671C218.263 399.744 217.813 399.817 217.356 399.854C217.204 399.914 217.041 399.939 216.878 399.927C212.748 400.436 208.589 400.675 204.428 400.64V400.64ZM265.05 102.321C250.875 102.321 236.886 105.35 230.247 109.858C225.978 112.811 222.399 116.655 219.756 121.125C217.113 125.595 215.47 130.585 214.938 135.752C214.381 139.193 214.432 142.704 215.088 146.127C219.861 137.384 226.466 129.777 234.451 123.829C248.138 114.999 264.065 110.279 280.348 110.227C282.179 110.227 283.993 110.296 285.775 110.43C286.35 110.478 286.917 110.502 287.468 110.502C289.995 110.502 291.684 110 291.883 109.197C292.045 108.536 291.202 107.705 289.453 106.793C281.763 103.468 273.418 101.939 265.05 102.321V102.321Z"/>
			</svg>
		</div>
		</>
	);
}

export default ContentLoadingIcon;