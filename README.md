# factory-bem-class

## Install

    yarn add factory-bem-class

## Getting Started

    import {factoryBemClass} from 'factory-bem-class';

    const cn = factoryBemClass('block');

    cn();
    //=> 'block';

    cn('element');
    cn({el: 'element'});
    //=> 'block__element';

    cn('element', 'modifier1');
    cn('element', {modifier1: true});
    cn('element', {modifier1: true, modifier2: false});
    cn({el: 'element', mods: 'modifier1'});
    cn({el: 'element', mods: {modifier1: true}});
    cn({el: 'element', mods: {modifier1: true, modifier2: false}});
    //=> 'block__element block__element--modifier1';

    cn('element', ['modifier1', 'modifier2']);
    cn('element', {modifier1: true, modifier2: true});
    cn({el: 'element', mods: ['modifier1', 'modifier2']});
    cn({el: 'element', mods: {modifier1: true, modifier2: true}});
    //=> 'block__element block__element--modifier1 block__element--modifier2';

    cn(null, 'modifier1');
    cn(null, {modifier1: true});
    cn(null, {modifier1: true, modifier2: false});
    cn({mods: 'modifier1'});
    cn({mods: {modifier1: true}});
    cn({mods: {modifier1: true, modifier2: false}});
    //=> 'block block--modifier1';

    cn(null, ['modifier1', 'modifier2']);
    cn(null, {modifier1: true, modifier2: true});
    cn({mods: ['modifier1', 'modifier2']});
    cn({mods: {modifier1: true, modifier2: true}});
    //=> 'block block--modifier1 block--modifier2';
