import { useForm } from 'react-hook-form';

export const CreateGroceryItem = (props) => {
  const { addGroceryItem } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        addGroceryItem(data);
      })}
    >
      <div>
        <label>Name: </label>{' '}
        <input
          {...register('name', {
            required: 'Required field',
            minLength: { value: 2, message: 'Minimum length is 2' },
          })}
        />
        {errors?.name && <span style={{ color: 'red' }}> {errors.name.message}</span>}
      </div>
      <div>
        <label>Category: </label>{' '}
        <input
          {...register('category', {
            required: 'Required field',
            minLength: { value: 2, message: 'Minimum length is 2' },
          })}
        />
        {errors?.category && <span style={{ color: 'red' }}>{errors.category.message}</span>}
      </div>
      <div>
        <label>Description: </label>{' '}
        <input
          {...register('description', {
            required: 'Required field',
            minLength: { value: 5, message: 'Minimum length is 5' },
          })}
        />
        {errors?.description && <span style={{ color: 'red' }}>{errors.description.message}</span>}
      </div>
      <div>
        <label>Points: </label>{' '}
        <input
          {...register('points', {
            required: 'Required field',
            min: { value: 1, message: 'Minimum is 1' },
            valueAsNumber: true,
          })}
          type="number"
        />
        {errors?.points && <span style={{ color: 'red' }}>{errors.points.message}</span>}
      </div>
      <div>
        <input type="submit" value="Add Item" />
      </div>
    </form>
  );
};
