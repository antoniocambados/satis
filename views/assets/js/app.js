import $ from 'cash-dom';
import Collapse from './App/Collapse';
import DateDistance from './App/DateDistance';
import PackageFilter from './App/PackageFilter';

function updateTimeElements () {
    DateDistance.calculate('time');
};

$(function () {
    // Package filter
    new PackageFilter('input#search', '#package-list', '.card');

    // Collapsable elements (Bootstrap4 substitution)
    new Collapse("[data-toggle='collapse']");

    // Time elements are updated on DOMContentLoaded and every 5 seconds
    updateTimeElements();
    window.setInterval(updateTimeElements, 5000);
});
