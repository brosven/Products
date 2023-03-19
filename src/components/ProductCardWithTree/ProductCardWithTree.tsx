import { ChevronRight, ExpandMore } from '@mui/icons-material';
import { TreeView } from '@mui/lab';
import { Button, Card, CardActions, CardContent, CardHeader, Collapse } from '@mui/material';
import { useState } from 'react';
import { ProductCardWithTreeProps } from './ProductCardWithTreeTypes';
import { renderTreeItems } from './ProductCardWithTreeUtils';
import { ProductDescription } from './ProductDescription/ProductDescription';

export const ProductCardWithTree = ({ tree }: ProductCardWithTreeProps) => {
  const [expanded, setExpanded] = useState(false);
  const { Name, descriptionen, descriptionru, children } = tree;

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardHeader title={Name} />
      <CardContent>
        <ProductDescription descriptionen={descriptionen} descriptionru={descriptionru} />
      </CardContent>
      {children && (
        <>
          <CardActions disableSpacing>
            <Button onClick={handleExpandClick}>{expanded ? 'Свернуть' : 'Развернуть'}</Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <TreeView
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
                sx={{ height: '100%', flexGrow: 1, overflowY: 'auto' }}
              >
                {children.map((tree) => renderTreeItems(tree))}
              </TreeView>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};
