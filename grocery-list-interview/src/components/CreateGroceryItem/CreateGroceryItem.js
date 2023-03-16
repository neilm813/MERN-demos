import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const CreateGroceryItem = (props) => {
  const { addGroceryItem } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // TODO: add custom error messages for the types of errors

  return (
    <form
      onSubmit={handleSubmit((data) => {
        addGroceryItem(data);
      })}
    >
      <div>
        {errors?.name?.type && <p style={{ color: 'red' }}>{errors.name.type}</p>}
        <label>Name: </label> <input {...register('name', { required: true, minLength: 2 })} />
      </div>
      <div>
        {errors?.category?.type && <p style={{ color: 'red' }}>{errors.category.type}</p>}
        <label>Category: </label> <input {...register('category', { required: true, minLength: 2 })} />
      </div>
      <div>
        {errors?.description?.type && <p style={{ color: 'red' }}>{errors.description.type}</p>}
        <label>Description: </label> <input {...register('description', { required: true, minLength: 5 })} />
      </div>
      <div>
        {errors?.points?.type && <p style={{ color: 'red' }}>{errors.points.type}</p>}
        <label>Points: </label>{' '}
        <input {...register('points', { required: true, min: 0, valueAsNumber: true })} type="number" />
      </div>
      <div>
        <input type="submit" value="Add Item" />
      </div>
    </form>
  );
};
