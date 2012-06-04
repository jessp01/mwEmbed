( function( mw, $ ) { "use strict";
	// Bind the KalturaWatermark where the uiconf includes the Kaltura Watermark
	$( mw ).bind( 'EmbedPlayerNewPlayer', function( event, embedPlayer ){
		$( embedPlayer ).bind( 'KalturaSupport_CheckUiConf', function( event, $uiConf, callback ){
			var layout = embedPlayer.getKalturaConfig( 'volumeBar', 'layoutMode' ) || 'vertical';
			$( embedPlayer ).bind('addControlBarComponent', function(event, controlBar ){
				controlBar.volume_layout = layout;
			});
			callback();
		});
	});
})( window.mw, window.jQuery );
