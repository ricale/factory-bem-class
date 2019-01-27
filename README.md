# factory-bem-class

## Install

    yarn add factory-bem-class

## Getting Started

    import {factoryBemClass} from 'factory-bem-class';

    const cn = factoryBemClass('block');

    cn();
    //=> 'block';

    cn('element');
    //=> 'block__element';

    cn('element', 'modifier1');
    //=> 'block__element--modifier1';

    cn('element', ['modifier1', 'modifier2']);
    //=> 'block__element--modifier1 block__element--modifier2';

    cn(null, 'modifier1');
    //=> 'block--modifier1';

    cn(null, ['modifier1', 'modifier2']);
    //=> 'block--modifier1 block--modifier2';

    cn({element: 'element'});
    //=> 'block__element';

    cn({element: 'element', modifier: 'modifier1'});
    //=> 'block__element--modifier1';

    cn({element: 'element', modifiers: ['modifier1', 'modifier2']});
    //=> 'block__element--modifier1 block__element--modifier2';

    cn({modifier: 'modifier1'});
    //=> 'block--modifier1';

    cn({modifiers: ['modifier1', 'modifier2']});
    //=> 'block--modifier1 block--modifier2';
