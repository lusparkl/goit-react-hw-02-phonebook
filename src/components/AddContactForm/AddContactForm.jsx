import { Formik } from "formik";

export const AddContactForm = () => {
  return (
      <Formik
          initialValues={{ name: '', phoneNumber: '' }}
      >
          {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              
          }) => (
              <form onSubmit={e => {
                  e.preventDefault()
                  console.log(values)
              }}>
                  <input
                      type="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                  />
                  <input
                      type="number"
                      name="phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                  />
                  <button type="submit" disabled={isSubmitting}>
                      Submit
                  </button>
              </form>
          )}
      </Formik>
  )
}
