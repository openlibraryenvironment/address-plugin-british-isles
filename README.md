



# address-plugin-britishIsles

This is a plugin designed for use with `address-plugin-utils` as part of a general set of plugins. This plugin in particular refers to the Great Britain specific address form.
## Generic information
For the generic information about how these plugins operate, please see [here](https://github.com/openlibraryenvironment/address-plugin-generic/blob/master/README.md). (I'd HIGHLY recommend starting there rather than trying to jump in blind here).

## GB-specific details
There aren't any magic properties to these fields, but there is a set way to fill them in.

The user is expected to fill out an address such as
```
Paradise House,
35 Paradise St,
Sheffield City Centre,
Sheffield
S3 8PZ
```
as:
 `Paradise House -> Building name`.
`35 Paradise St -> Street Address` (Street address number would **not** be expected to be separated into building name).
`Sheffield City Centre -(?)> Town`. This is an optional field, and I'd expect the address to work fine without this proviso, but this would be the place for a location within a city but larger than a street.
`Sheffield -> City`.
`S3 8PZ -> Post Code`.
