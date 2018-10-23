import $ from 'cash-dom';
import Collapse from './Collapse';

class PackageFilter {
    constructor(input, list, listItem) {
        this.input = $(input);
        this.list = $(list);
        this.listItemSelector = listItem;
        this.packages = this.list.find(listItem);
        this.inputTimeout = null;

        this.readHash = this.readHash.bind(this);
        this.updateHash = this.updateHash.bind(this);
        this.filterPackages = this.filterPackages.bind(this);

        this.init();
    }

    readHash() {
        let hash = window.decodeURIComponent(window.location.hash.substr(1));

        if (hash.length > 0) {
            this.input.val(hash);
            this.filterPackages();
        }
    };

    updateHash() {
        window.location.hash = window.encodeURIComponent(this.input.val());
    };

    filterPackages() {
        var instance = this,
            needle = this.input.val().toLowerCase(),
            closestSelector = this.listItemSelector;

        Collapse.collapse(this.list);

        this.packages.each(function () {
            let closest = $(this).closest(closestSelector);

            Collapse.collapse(closest);

            if ($(this).text().toLowerCase().indexOf(needle) !== -1) {
                Collapse.show(closest);
            }
        });

        Collapse.show(this.list);
    };

    init() {
        var instance = this;

        instance.input.on('keyup', function () {
            instance.updateHash();
            window.clearTimeout(instance.inputTimeout);
            instance.inputTimeout = window.setTimeout(instance.filterPackages, 350);
        });

        $(window).on('keyup', function (event) {
            if (event.keyCode === 27) { // "ESC" keyCode
                instance.input.val('');
                instance.filterPackages();
            }
        });

        instance.readHash();
    }
}

export default PackageFilter;
