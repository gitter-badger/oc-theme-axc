 /**
  * @todo i18n for bootstrap-checkbox
  * @todo sourcemap error when write
  * @todo jquery compile problem with define
  * @todo gulp dep in npm
  */

var axc_gulp = require('axc-gulp');
var __join = axc_gulp.plugin.path.join;

var assets_directory = 'assets';
var bower_directory = 'vendor';

function __bower(path)
{
	return __join(bower_directory, path);
}

axc_gulp.config.set({
	name: 'theme',
	title: 'AxC Theme',
	path: __join(__dirname, assets_directory),
	icon_notify: __join(__dirname, assets_directory, 'images/gulp/icon/notify.png')
});

axc_gulp.task
	.js2dist({ taskName: 'js2dist-bootstrap', src: __bower('bootstrap/js/**') })
	.js2dist({ taskName: 'js2dist-bootstrap-checkbox', src: __bower('bootstrap-checkbox/js/**') })
	.js2dist({ taskName: 'js2dist-jasny-bootstrap', src: __bower('jasny-bootstrap/js/**') })

	.clean({ taskName: 'clean-bootstrap', src: __bower('bootstrap/less/variables.less') })
	.less2css({ taskName: 'less2css-bootstrap', src: __bower('bootstrap/less/bootstrap.less'), dependences: ['clean-bootstrap'] })
	.css2dist({ taskName: 'css2dist-bootstrap', src: __bower('bootstrap/less/bootstrap.less'), dependences: ['less2dist-bootstrap'] })
	.copy({ taskName: 'copy-bootstrap-font', src: __bower('bootstrap/fonts/**'), dest: 'fonts/bootstrap' })

	.clean({ taskName: 'clean-jasny-bootstrap', src: __bower('jasny-bootstrap/less/variables.less') })
	.less2css({ taskName: 'less2css-jasny-bootstrap', src: __bower('jasny-bootstrap/less/bootstrap.less'), dependences: ['clean-jasny-bootstrap'], paths: [
		__bower('bootstrap/less',
		__bower('jasny-bootstrap/less',
		assets_directory + 'less/jasny-bootstrap'
	] })
	.css2dist({ taskName: 'css2dist-jasny-bootstrap', src: __bower('jasny-bootstrap/less/bootstrap.less'), dependences: ['clean-jasny-bootstrap'], paths: [

	.clean({ taskName: 'clean-font-awesome', src: __bower('fontawesome/less/variables.less') })
	.less({ taskName: 'less-font-awesome', src: __bower('fontawesome/less/font-awesome'), dependences: ['clean-font-awesome'], paths: [
		__bower('font-awesome/less',
		assets_directory + 'less/font-awesome'
	] })
	.copy({ taskName: 'copy-fontawesome-font', src: __bower('fontawesome/fonts/**'), dest: 'fonts/font-awesome' });

	less2css({ taskName: 'css-theme', src: 'less/theme.less' })
	css2dist({ taskName: 'theme-css2dist', src: 'less/theme.less' })
*/